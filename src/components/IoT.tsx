import Section from './Section';
import { portfolio } from '../data/portfolio';

export default function IoT() {
  const { description, otherProjects } = portfolio.iot;
  if (!description && otherProjects.length === 0) return null;

  return (
    <Section id="iot" title="IoT & Embedded Systems">
      <p className="max-w-3xl leading-relaxed">{description}</p>
      {otherProjects.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold text-white">Other project areas I have taken part in</h3>
          <ul className="flex flex-wrap gap-2">
            {otherProjects.map((p) => (
              <li key={p} className="tag">
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
