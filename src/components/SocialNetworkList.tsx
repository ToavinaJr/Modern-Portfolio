import socialNetworks from '../data/socialNetwork';
import { SocialNetworkCard } from './SocialNetworkCard';

export function SocialNetworkList() {
  return (
    <div className="grid gap-4" aria-label="Social networks">
      {socialNetworks.map((network) => (
        <SocialNetworkCard {...network} key={network.name} />
      ))}
    </div>
  );
}
