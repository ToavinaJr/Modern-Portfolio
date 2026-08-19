import { usePageMeta } from '../hooks/usePageMeta';

export function NotFoundPage() {
  usePageMeta('Page Not Found | ToavinaJr', 'The requested portfolio page could not be found.', location.pathname);
  return <main id="main-content" className="page not-found"><p className="eyebrow">404</p><h1>Page not found</h1><p>The page you requested does not exist.</p><a className="button" href="/">Return home</a></main>;
}
