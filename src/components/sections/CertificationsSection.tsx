import certifications from '../../data/certification';

function credentialUrl(cert: (typeof certifications)[number]) {
  return cert.certificateLink ?? cert.image;
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="eyebrow">Certifications</div>
      <h2>Selected credentials</h2>
      <div className="cert-grid">
        {certifications.slice(0, 4).map((cert) => (
          <div className="cert-card-shell" key={cert.title}>
            <a className="cert-card-link" href={credentialUrl(cert)} target="_blank" rel="noopener noreferrer" aria-label={`View ${cert.title} certificate`}>
              <article className="info-card cert-hover-card">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span className="text-link">View credential ↗</span>
              </article>
            </a>
          </div>
        ))}
      </div>
      <details>
        <summary>View all certifications</summary>
        <div className="cert-grid all-certifications">
          {certifications.map((cert) => (
            <div className="cert-card-shell" key={`${cert.issuer}-${cert.title}`}>
              <a className="cert-card-link" href={credentialUrl(cert)} target="_blank" rel="noopener noreferrer" aria-label={`View ${cert.title} certificate`}>
                <article className="project-card cert-card cert-hover-card">
                  {cert.image && <img src={cert.image} alt={`${cert.title} certificate`} width="640" height="360" loading="lazy" decoding="async" />}
                  <div className="card-body">
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                    {cert.description && <p>{cert.description}</p>}
                    <span className="text-link">View credential ↗</span>
                  </div>
                </article>
              </a>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
