import { PageShell } from '@/components/layouts/PageShell';
import { NavbarSection } from '@/components/sections/NavbarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { CertificatesSection } from '@/components/sections/CertificatesSection';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { SEO } from '@/components/ui/SEO';

export function Home() {
  return (
    <PageShell>
      <SEO />
      <NavbarSection />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="certificates">
          <CertificatesSection />
        </section>
        <section id="github">
          <GitHubSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <FooterSection />
    </PageShell>
  );
}
