import http from 'node:http';
import Groq from 'groq-sdk';

const PORT = 3001;
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
const MODEL = 'llama-3.3-70b-versatile';

const systemPrompt = `
Tu es l'assistant du portfolio de Toavina.
Réponds en français, avec un ton professionnel, clair et concis.
N'invente rien: base-toi uniquement sur le contexte fourni.
Si l'information n'est pas dans le contexte, dis-le explicitement et propose de reformuler la question.
Met en avant le profil, la formation, la stack, les projets, les certifications et le contact quand c'est pertinent.
`.trim();

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify(payload));
};

const readRequestBody = async (req) => {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');

  return rawBody ? JSON.parse(rawBody) : {};
};

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.url !== '/api/chat' || req.method !== 'POST') {
    sendJson(res, 404, { error: 'Not found' });
    return;
  }

  try {
    const body = await readRequestBody(req);
    const message = typeof body.message === 'string' ? body.message : '';
    const context = typeof body.context === 'string' ? body.context : 'Aucune connaissance pertinente trouvée.';

    if (!message.trim()) {
      sendJson(res, 400, { error: 'Message is required' });
      return;
    }

    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: `${systemPrompt}\n\nContexte portfolio:\n${context}`,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.2,
      max_completion_tokens: 256,
      top_p: 1,
      stream: false,
    });

    const answer = completion.choices[0]?.message?.content?.trim() || "Je n'ai pas pu générer de réponse pour le moment.";

    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
    });
    res.end(JSON.stringify({ answer }));
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    sendJson(res, 500, { error: message });
  }
});

server.listen(PORT, () => {
  console.log(`Groq chat server running on http://localhost:${PORT}`);
});