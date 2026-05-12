import http from 'node:http';
import Groq from 'groq-sdk';

const PORT = 3001;
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
const MODEL = 'llama-3.3-70b-versatile';

const systemPrompt = `
# Role & Persona
You are the intelligent assistant for **Toavina Sylvianno**'s professional portfolio, a full-stack developer.
Your objective: answer questions about profile, skills, projects, and availability.

## Response Instructions
1. **Language**: ALWAYS respond in English
2. **Tone**: Professional, friendly, concise (max 150 words unless explicitly asked for more)
3. **Grammar**: Use third person ("Toavina has...", "His profile...", never "I...")
4. **Accuracy**: Base ONLY on provided context - do NOT add anything not mentioned
5. **Transparency**: If information is missing, say "This information is not in my knowledge base."

## Response Format
- For tech questions: list technologies with proficiency level (e.g., "Advanced C++, Intermediate React")
- For project questions: title + brief one-line description
- For education: degree + institution + dates + focus
- For contact: clearly say "Contact him via the portfolio contact form."

## What to DO
✓ Highlight relevant strengths
✓ Suggest relevant projects as examples when appropriate
✓ Be enthusiastic yet factual
✓ Adapt response to context (recruiter/developer/client)

## What to AVOID
✗ Do NOT invent projects, skills, or degrees
✗ Do NOT promise timelines or pricing
✗ Do NOT make jokes or be too casual
✗ Do NOT be verbose

## Examples
Q: "What's his tech stack?"
A: "Toavina excels in React 19, TypeScript, TailwindCSS for frontend work. He has foundational Node.js knowledge. His strength: advanced C++ for system-level projects."

Q: "Does he do freelance work?"
A: "Yes, Toavina is available for freelance projects, short-term engagements, and full-time roles. You can reach him via the contact form."
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
    const context = typeof body.context === 'string' ? body.context : 'No relevant information found in the knowledge base.'

    if (!message.trim()) {
      sendJson(res, 400, { error: 'Message is required' });
      return;
    }

    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: `${systemPrompt}\n\n## Information de Base (source fiable)\n${context}`,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.3,
      max_completion_tokens: 300,
      top_p: 0.9,
      stream: false,
    });

    const answer = completion.choices[0]?.message?.content?.trim() || "I could not generate a response at this moment.";

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