import type { Skill } from '../types';

interface SkillCardProps {
  group: string;
  skills: Skill[];
}

export function SkillCard({ group, skills }: SkillCardProps) {
  return (
    <article className="info-card">
      <h3>{group}</h3>
      <ul className="skill-list">
        {skills.map(({ name, Icon }) => (
          <li key={name}>
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
