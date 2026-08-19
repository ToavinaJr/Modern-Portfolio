import { ExternalLink } from 'lucide-react';
import type { SocialNetwork } from '../types';

export function SocialNetworkCard({ name, url, description, Icon }: SocialNetwork) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contact me on ${name}`}
      className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 no-underline transition hover:-translate-y-1 hover:border-accent"
    >
      <Icon className="h-8 w-8 shrink-0 text-accent" aria-hidden="true" />
      <span className="grid gap-1">
        <strong className="text-lg text-copy">{name}</strong>
        <small className="text-sm leading-relaxed text-muted">{description}</small>
      </span>
      <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-muted transition group-hover:text-accent" aria-hidden="true" />
    </a>
  );
}
