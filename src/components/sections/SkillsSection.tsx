import skills from '../../data/skills';
import { SkillCard } from '../SkillCard';

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section"
    >
      <div className="eyebrow">
        Skills
      </div>

      <h2>
        Technologies demonstrated through practical work
      </h2>

      <div className="skills-grid">
        {Object.entries(skills).map(([group, items], index) => (
          <SkillCard
            key={group}
            group={group}
            skills={items}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}