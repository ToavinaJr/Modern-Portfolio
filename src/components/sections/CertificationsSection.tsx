import certifications from '../../data/certification';

export function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="eyebrow">Certifications</div>
      <h2>Selected credentials</h2>
      <div className="cert-grid">
        {certifications.slice(0, 4).map((cert) => (
          <div className="cert-card-shell" key={cert.title}>
            <article className="info-card cert-hover-card">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.certificateLink && <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer">View credential →</a>}
            </article>
          </div>
        ))}
      </div>
      <details>
        <summary>View all certifications</summary>
        <div className="cert-grid all-certifications">
          {certifications.map((cert) => (
            <div className="cert-card-shell" key={`${cert.issuer}-${cert.title}`}>
              <article className="project-card cert-card cert-hover-card">
                {cert.image && <img src={cert.image} alt={`${cert.title} certificate`} width="640" height="360" loading="lazy" decoding="async" />}
                <div className="card-body">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                  {cert.description && <p>{cert.description}</p>}
                  {cert.certificateLink ? <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer">View credential →</a> : cert.image && <a href={cert.image} target="_blank" rel="noopener noreferrer">View certificate →</a>}
                </div>
              </article>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
