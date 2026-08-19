import { useEffect } from 'react';
import { setMeta } from '../lib/seo';

export function usePageMeta(title: string, description: string, path: string, image?: string) {
  useEffect(() => setMeta(title, description, path, image), [title, description, path, image]);
}
