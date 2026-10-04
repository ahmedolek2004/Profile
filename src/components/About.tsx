import Section from './Section';
import { portfolio } from '../data/portfolio';

export default function About() {
  const { paragraphs } = portfolio.about;
  if (paragraphs.length === 0) return null;

  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
