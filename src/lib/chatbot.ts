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

  return documents
    .map((document) => ({
      document,
      ...scoreDocument(questionTokens, document),
    }))
    .sort((left, right) => right.score - left.score)
    .slice(0, 3);
};

export const buildKnowledgeContext = (question: string, documents: ChatKnowledgeDocument[]) => {
  const matches = retrieveKnowledge(question, documents).filter((item) => item.score > 0);

  if (!matches.length) {
    return 'Aucune connaissance pertinente trouvée dans la base de connaissance du portfolio.';
  }

  return matches
    .map((item) => `- ${item.document.title}: ${item.document.content}`)
    .join('\n');
};