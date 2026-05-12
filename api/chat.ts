import type { IncomingMessage, ServerResponse } from 'node:http';
import Groq from 'groq-sdk';
import { buildKnowledgeContext } from '../src/lib/chatbot';
import chatbotKnowledge from '../src/data/chatbotKnowledge';

const MODEL = 'llama-3.3-70b-versatile';

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

const systemPrompt = `
Tu es l'assistant du portfolio de Toavina.
Réponds en français, avec un ton professionnel, clair et concis.
N'invente rien: base-toi uniquement sur le contexte fourni.
Si l'information n'est pas dans le contexte, dis-le explicitement et propose de reformuler la question.
Met en avant le profil, la formation, la stack, les projets, les certifications et le contact quand c'est pertinent.
`.trim();

const sendJson = (res: ServerResponse, statusCode: number, payload: unknown) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify(payload));
};

const readRequestBody = async (req: IncomingMessage) => {
  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');
  return rawBody ? JSON.parse(rawBody) : {};
};

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method not allowed' });
    return;
  }

  try {
    const body = await readRequestBody(req);
    const message = typeof body.message === 'string' ? body.message : '';
    const context = typeof body.context === 'string' ? body.context : buildKnowledgeContext('', chatbotKnowledge);

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

    sendJson(res, 200, { answer });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    sendJson(res, 500, { error: message });
  }
}