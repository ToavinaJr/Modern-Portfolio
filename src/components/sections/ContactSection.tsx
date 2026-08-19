import { ContactForm } from '../ContactForm';
import { SocialNetworkList } from '../SocialNetworkList';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section"
    >
      <div className="eyebrow">
        Contact
      </div>

      <h2>
        Let&apos;s build something useful
      </h2>

      <p className="lead mb-8">
        I am open to full-stack roles, C++/Qt opportunities and remote
        international projects.
      </p>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)]">
        <SocialNetworkList />
        <ContactForm />
      </div>
    </section>
  );
}