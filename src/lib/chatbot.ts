import { ChatKnowledgeDocument } from '../types';

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

export const generateAnswer = (question: string, documents: ChatKnowledgeDocument[]) => {
  const normalizedQuestion = normalize(question);
  const matches = retrieveKnowledge(question, documents).filter((item) => item.score > 0);

  if (!matches.length) {
    return "Je n'ai pas trouvé de réponse fiable dans la base de connaissance. Je peux répondre sur le profil, la formation, la stack, les projets, les certifications ou le contact.";
  }

  const topDocuments = matches.map((item) => item.document);

  const hasGreeting = /^(salut|bonjour|bonsoir)\b/.test(normalizedQuestion);
  const asksForProjects = /(projet|projets|realisation|réalisation|portfolio)/.test(normalizedQuestion);
  const asksForStack = /(stack|technologie|techno|competence|compétence|skills?)/.test(normalizedQuestion);
  const asksForEducation = /(formation|etude|étude|ecole|école|master|universite|université)/.test(normalizedQuestion);
  const asksForCertification = /(certif|certification|certificat)/.test(normalizedQuestion);

  const lines = [
    hasGreeting
      ? 'Bonjour, je peux te guider sur ce profil et ses réalisations.'
      : 'Voici ce que la base de connaissance indique sur ce profil:',
  ];

  if (asksForStack) {
    const stackDoc = topDocuments.find((doc) => doc.id === 'stack') ?? topDocuments[0];
    lines.push(stackDoc.content);
  }

  if (asksForProjects) {
    const projectDoc = topDocuments.find((doc) => doc.id === 'projects') ?? topDocuments[0];
    lines.push(projectDoc.content);
  }

  if (asksForEducation) {
    const educationDoc = topDocuments.find((doc) => doc.id === 'education') ?? topDocuments[0];
    lines.push(educationDoc.content);
  }

  if (asksForCertification) {
    const certificationDoc = topDocuments.find((doc) => doc.id === 'certifications') ?? topDocuments[0];
    lines.push(certificationDoc.content);
  }

  if (!asksForStack && !asksForProjects && !asksForEducation && !asksForCertification) {
    lines.push(topDocuments.map((doc) => doc.content).join(' '));
  }

  lines.push('Si tu veux, je peux aussi te faire une version plus précise pour recruteur, étudiant, ou client.');

  return lines.join(' ');
};