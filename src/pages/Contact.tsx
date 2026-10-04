import { useEffect } from 'react';
import { PageShell } from '@/components/layouts/PageShell';
import { NavbarSection } from '@/components/sections/NavbarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { ContactSection } from '@/components/sections/ContactSection';

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <NavbarSection />
      <main className="pt-12 min-h-screen">
        <ContactSection />
      </main>
      <FooterSection />
    </PageShell>
  );
}
