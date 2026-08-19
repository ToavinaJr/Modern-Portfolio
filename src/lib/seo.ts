export const SITE = 'https://portfolio-toavinajr.vercel.app';

export function setMeta(title: string, description: string, path: string, image = '/images/og-portfolio.png') {
  document.title = title;
  const set = (selector: string, attr: string, value: string) => document.querySelector(selector)?.setAttribute(attr, value);
  set('meta[name="description"]', 'content', description);
  set('link[rel="canonical"]', 'href', `${SITE}${path}`);
  set('meta[property="og:title"]', 'content', title);
  set('meta[property="og:description"]', 'content', description);
  set('meta[property="og:url"]', 'content', `${SITE}${path}`);
  set('meta[property="og:image"]', 'content', `${SITE}${image}`);
  set('meta[name="twitter:title"]', 'content', title);
  set('meta[name="twitter:description"]', 'content', description);
  set('meta[name="twitter:image"]', 'content', `${SITE}${image}`);
}
