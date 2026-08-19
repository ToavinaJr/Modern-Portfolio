import { SiLinkedin, SiMalt, SiUpwork } from 'react-icons/si';
import type { SocialNetwork } from '../types';

const socialNetworks: SocialNetwork[] = [
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~0141db3c7711b27f9b',
    description:
      'Contactez-moi sur Upwork pour vos missions freelance et projets à distance.',
    Icon: SiUpwork,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/randriamihaingoson-toavina-sylvianno-38a987276',
    description:
      'Échangeons sur LinkedIn à propos d’opportunités et de collaborations.',
    Icon: SiLinkedin,
  },
  {
    name: 'Malt',
    url: 'https://www.malt.fr/profile/toavinasylviannorandriamihaingoson',
    description:
      'Retrouvez-moi sur Malt pour discuter de votre prochain projet.',
    Icon: SiMalt,
  },
];

export default socialNetworks;