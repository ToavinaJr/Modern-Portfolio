export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section"
    >
      <div className="eyebrow">
        Experience &amp; education
      </div>

      <h2>
        Professional experience,
      </h2>

      <div className="two-columns">
        <article className="info-card">
          <h3>
            Professional Experience
          </h3>

          <h4>
            Mathematics Teacher · Ikigasy
          </h4>

          <p>
            Teaching mathematics through structured explanations, problem
            decomposition and learner-focused communication.
          </p>

          <h4>
            Private Mathematics Tutor
          </h4>

          <p>
            Adapting individual lessons to each learner&apos;s needs and
            progress.
          </p>
        </article>

        <article className="info-card">
          <h3>
            Education
          </h3>

          <h4>
            Master 2 MISA Student
          </h4>

          <p>
            Mathematics, Computer Science and Applied Statistics at the
            University of Antananarivo.
          </p>

          <a href="/projects">
            Software engineering projects →
          </a>
        </article>
      </div>
    </section>
  );
}