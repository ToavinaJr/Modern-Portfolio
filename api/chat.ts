import type { IncomingMessage, ServerResponse } from 'node:http';
import Groq from 'groq-sdk';
import { buildKnowledgeContext } from '../src/lib/chatbot.js';
import chatbotKnowledge from '../src/data/chatbotKnowledge.js';

const MODEL = 'llama-3.3-70b-versatile';

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

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

    // Construire le prompt final avec contexte bien formaté
    const fullSystemPrompt = `${systemPrompt}\n\n## Information de Base (source fiable)\n${context}`;

    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: fullSystemPrompt,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.3, // Plus bas pour plus de cohérence
      max_completion_tokens: 300, // Augmenté pour réponses plus riches
      top_p: 0.9,
      stream: false,
    });

    const answer = completion.choices[0]?.message?.content?.trim() || "I could not generate a response at this moment.";

    sendJson(res, 200, { answer });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    sendJson(res, 500, { error: message });
  }
}