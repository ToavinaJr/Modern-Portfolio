import { ChatKnowledgeDocument } from '../types.js';

const STOP_WORDS = new Set([
  'a',
  'alors',
  'au',
  'aucun',
  'aucune',
  'avec',
  'dans',
  'de',
  'des',
  'du',
  'elle',
  'en',
  'et',
  'etre',
  'être',
  'ils',
  'je',
  'la',
  'le',
  'les',
  'leur',
  'lui',
  'ma',
  'mais',
  'me',
  'moi',
  'mon',
  'ne',
  'nous',
  'on',
  'ou',
  'par',
  'pas',
  'pour',
  'qu',
  'que',
  'qui',
  'se',
  'ses',
  'son',
  'sur',
  'ta',
  'te',
  'tes',
  'toi',
  'ton',
  'tu',
  'un',
  'une',
  'vos',
  'votre',
  'vous',
]);

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const tokenize = (value: string) =>
  normalize(value)
    .split(/\s+/)
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token));

const scoreDocument = (questionTokens: string[], document: ChatKnowledgeDocument) => {
  const contentTokens = tokenize(`${document.title} ${document.content} ${document.tags.join(' ')}`);
  const contentSet = new Set(contentTokens);

  let score = 0;

  for (const token of questionTokens) {
    if (contentSet.has(token)) {
      score += 3;
    }

    if (document.tags.some((tag) => normalize(tag).includes(token))) {
      score += 2;
    }
  }

  const overlapRatio = questionTokens.length > 0 ? score / questionTokens.length : 0;

  return { score, overlapRatio };
};

export const retrieveKnowledge = (question: string, documents: ChatKnowledgeDocument[]) => {
  const questionTokens = tokenize(question);
  const questionNormalized = normalize(question);

  const scored = documents.map((document) => {
    const { score, overlapRatio } = scoreDocument(questionTokens, document);
    
    // Bonus si la question contient des mots exactes du titre
    let titleBonus = 0;
    if (document.title.toLowerCase().includes(questionNormalized.split(' ')[0])) {
      titleBonus = 2;
    }
    
    const finalScore = score + titleBonus;
    
    return {
      document,
      score: finalScore,
      overlapRatio,
    };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 3);
};

export const buildKnowledgeContext = (question: string, documents: ChatKnowledgeDocument[]) => {
  const matches = retrieveKnowledge(question, documents);

  if (!matches.length) {
    return 'No specific match found in the knowledge base. However, here is general information about Toavina: He is a full-stack developer with advanced C++ and React/TypeScript skills, dual masters degree, problem-solving expertise, and is available for freelance and full-time opportunities. Contact via the portfolio form for collaboration.';
  }

  const context = matches
    .map((item) => `**${item.document.title}**: ${item.document.content}`)
    .join('\n\n');

  return `Relevant profile context:\n${context}`;
};