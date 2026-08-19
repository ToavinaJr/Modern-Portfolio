import type { IconType } from 'react-icons';

export type ProjectCategory = 'Full-Stack' | 'Frontend' | 'C++/Qt' | 'AI Integration' | 'Games' | 'Automation' | 'Other';

export interface Project {
  slug: string;
  title: string;
  summary: string;
  solution: string;
  role: string;
  features: string[];
  tech: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
  category: ProjectCategory;
  selected: boolean;
  challenge?: string;
  learned?: string;
  problem?: string;
  goals?: string[];
  architecture?: string[];
  decisions?: string[];
  results?: string;
  status: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  image: string;
  certificateLink?: string;
  date?: string;
  description?: string;
}

export interface Education { 
  degree: string; 
  school: string; 
  period: string; 
}

export interface ChatKnowledgeDocument { 
  id: string; 
  title: string; 
  content: string; 
  tags: string[]; 
}

export interface ChatMessage { 
  id: string; 
  role: 'user' | 'assistant'; 
  content: string; 
}

export interface ChatApiResponse { 
  answer?: 
  string; 
  error?: string; 
}

export interface SocialNetwork {
  name: string;
  url: string;
  description: string;
  Icon: IconType;
}

export interface Skill {
  name: string;
  Icon: IconType;
}
