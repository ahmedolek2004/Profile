import Section from './Section';
import { portfolio } from '../data/portfolio';

export default function Education() {
  const { education } = portfolio;
  if (education.length === 0) return null;

  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {education.map((e) => (
          <article key={`${e.institution}-${e.degree}`} className="card">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-lg font-semibold text-white">{e.degree}</h3>
              <p className="text-sm text-slate-400">{e.period}</p>
            </div>
            <p className="mt-1 text-sm">
              {e.institution} · {e.location}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
