import Section from './Section';
import { portfolio } from '../data/portfolio';

export default function Experience() {
  const { experience } = portfolio;
  if (experience.length === 0) return null;

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {experience.map((e) => (
          <article key={`${e.organization}-${e.period}`} className="card">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-lg font-semibold text-white">{e.role}</h3>
              <p className="text-sm text-slate-400">{e.period}</p>
            </div>
            <p className="mt-1 text-sm">
              {e.organization} · {e.location}
            </p>
            {e.points && e.points.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
