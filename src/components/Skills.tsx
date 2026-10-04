import Section from './Section';
import { portfolio } from '../data/portfolio';

export default function Skills() {
  const groups = Object.entries(portfolio.skills).filter(([, items]) => items.length > 0);
  if (groups.length === 0) return null;

  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map(([name, items]) => (
          <div key={name} className="card">
            <h3 className="mb-3 font-display text-base font-semibold text-white">{name}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
