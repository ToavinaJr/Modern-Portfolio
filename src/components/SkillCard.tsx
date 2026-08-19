import type { CSSProperties } from 'react';
import type { Skill } from '../types';

interface SkillCardProps {
  group: string;
  skills: Skill[];
  index: number;
}

function colorFromGroup(group: string) {
  const hue = [...group].reduce((total, character) => total + character.charCodeAt(0) * 7, 0) % 360;
  return `hsl(${hue} 90% 62%)`;
}

export function SkillCard({ group, skills, index }: SkillCardProps) {
  const particleStyle = { '--particle-color': colorFromGroup(group) } as CSSProperties;
  return (
    <article className={`info-card skill-card ${index % 2 === 0 ? 'skill-card-clockwise' : 'skill-card-counterclockwise'}`} style={particleStyle}>
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
