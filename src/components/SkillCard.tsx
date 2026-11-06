import type { Skill } from '../types';

interface SkillCardProps {
  group: string;
  skills: Skill[];
  index: number;
}

export function SkillCard({ group, skills, index }: SkillCardProps) {
  return (
    <article className={`info-card skill-card ${index % 2 === 0 ? 'skill-card-clockwise' : 'skill-card-counterclockwise'}`}>
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
