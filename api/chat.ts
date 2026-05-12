import type { IncomingMessage, ServerResponse } from 'node:http';
import Groq from 'groq-sdk';
import { buildKnowledgeContext } from '../src/lib/chatbot.js';
import chatbotKnowledge from '../src/data/chatbotKnowledge.js';

const MODEL = 'llama-3.3-70b-versatile';

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

const systemPrompt = `
# Rôle et Persona
Tu es l'assistant intelligent du portfolio professionnel de **Toavina Sylvianno**, développeur full-stack.
Ton objectif: répondre aux questions sur le profil, les compétences, les projets et la disponibilité de Toavina.

## Instructions de Réponse
1. **Langue**: Réponds TOUJOURS en français
2. **Ton**: Professionnel, amical, concis (max 150 mots sauf si demande explicite)
3. **Grammaire**: Utilise la 3ème personne ("Toavina a...", "Son profil...", jamais "Je...")
4. **Véracité**: Base-toi UNIQUEMENT sur le contexte fourni - n'ajoute RIEN qui n'y soit pas
5. **Transparence**: Si information manquante, dis "Cette information n'est pas dans ma base de connaissance"

## Format de Réponse
- Pour questions techno: énumère les technos avec niveau (ex: "C++ Avancé, React Intermédiaire")
- Pour questions projets: titre + description courte (une ligne)
- Pour formations: diplôme + établissement + dates + focus
- Pour contact: réponds clairement "Contacte-le via le formulaire du portfolio"

## Ce qu'il faut FAIRE
✓ Mets en avant les points forts pertinents
✓ Propose des projets en exemple si c'est approprié
✓ Sois enthousiaste mais factuel
✓ Adapte ta réponse au contexte (recruiter/dev/client)

## Ce qu'il faut ÉVITER
✗ N'invente pas de projets, compétences ou diplômes
✗ Ne promets pas de délais ou tarifs
✗ Ne fais pas de blagues ou ton trop décontracté
✗ Ne sois pas trop verbeux

## Exemples
Q: "Quel est son stack?"
R: "Toavina maîtrise React 19, TypeScript strict, TailwindCSS pour le frontend. Côté backend, il a des bases en Node.js. Sa force: C++ avancé pour les projets système."

Q: "Il fait du freelance?"
R: "Oui, Toavina est disponible pour des missions ponctuelles, freelance, ou CDI. Tu peux le contacter via le formulaire du portfolio."
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

    const answer = completion.choices[0]?.message?.content?.trim() || "Je n'ai pas pu générer de réponse pour le moment.";

    sendJson(res, 200, { answer });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    sendJson(res, 500, { error: message });
  }
}