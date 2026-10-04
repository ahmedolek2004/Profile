import { FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Section from './Section';
import { portfolio } from '../data/portfolio';

export default function Contact() {
  const { profile, social } = portfolio;

  const rows = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}`, show: Boolean(profile.email) },
    { icon: MapPin, label: profile.location, href: '', show: Boolean(profile.location) },
    { icon: Github, label: 'GitHub', href: social.github, show: Boolean(social.github) },
    { icon: Linkedin, label: 'LinkedIn', href: social.linkedin, show: Boolean(social.linkedin) },
    { icon: FileText, label: 'Resume (PDF)', href: profile.resumeUrl, show: Boolean(profile.resumeUrl) },
  ].filter((r) => r.show);

  return (
    <Section id="contact" title="Contact">
      <p className="mb-6 max-w-2xl leading-relaxed">
        I am open to internship and junior opportunities. The quickest way to reach me is by email.
      </p>

      <ul className="space-y-3">
        {rows.map(({ icon: Icon, label, href }) => (
          <li key={label} className="flex items-center gap-3">
            <Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
            {href ? (
              <a
                href={href}
                {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="break-all text-slate-200 hover:text-accent hover:underline"
              >
                {label}
              </a>
            ) : (
              <span>{label}</span>
            )}
          </li>
        ))}
      </ul>

      <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
        <Mail size={16} aria-hidden="true" /> Send me an email
      </a>
    </Section>
  );
}
