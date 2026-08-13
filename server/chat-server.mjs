import http from 'node:http';
import Groq from 'groq-sdk';

const PORT = 3001;
const MODEL = 'llama-3.3-70b-versatile';
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
const trustedContext = `Toavina Sylvianno Randriamihaingoson, known as ToavinaJr, is a Software Engineer and Full-Stack Developer based in Antananarivo, Madagascar and available for remote international opportunities.
He is a Master 2 MISA student at the University of Antananarivo and teaches mathematics at Ikigasy in addition to private tutoring.
Documented skills include React, TypeScript, JavaScript, Next.js, Tailwind CSS, NestJS, Node.js, REST APIs, authentication, PostgreSQL, Prisma, MySQL, C++, Qt, CMake, SFML, Docker, Linux, Git, GitHub, Vercel, LLM API integration and workflow automation.
Selected projects: Fret Flow, Edu OS, Kôziko, Editera-ko and this knowledge-grounded AI Portfolio Assistant.`;
const systemPrompt = `You are Toavina's AI Portfolio Assistant. Answer only about his documented profile, skills, projects, education, experience, availability and contact options. Respond in English, in the third person, professionally and concisely. Use only the trusted context. Never invent employers, projects, results, levels, years of experience, degrees or pricing. For missing or unrelated information reply: "This information is not documented in the portfolio knowledge base."\n\nTrusted context:\n${trustedContext}`;

const sendJson = (res, status, payload) => { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(payload)); };
const readBody = async (req) => { const chunks = []; let size = 0; for await (const chunk of req) { size += chunk.length; if (size > 10_000) throw new Error('TOO_LARGE'); chunks.push(chunk); } return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'); };

http.createServer(async (req, res) => {
  if (req.url !== '/api/chat' || req.method !== 'POST') return sendJson(res, 404, { error: 'Not found' });
  try {
    const body = await readBody(req);
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    if (!message) return sendJson(res, 400, { error: 'Message is required.' });
    if (message.length > 500) return sendJson(res, 400, { error: 'Message is too long.' });
    const completion = await client.chat.completions.create({ model: MODEL, messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: message }], temperature: .1, max_completion_tokens: 250, stream: false });
    const answer = completion.choices[0]?.message?.content?.trim();
    return answer ? sendJson(res, 200, { answer }) : sendJson(res, 503, { error: 'The assistant returned an empty response.' });
  } catch { return sendJson(res, 503, { error: 'The portfolio assistant is temporarily unavailable.' }); }
}).listen(PORT, () => console.log(`Portfolio assistant server running on http://localhost:${PORT}`));
