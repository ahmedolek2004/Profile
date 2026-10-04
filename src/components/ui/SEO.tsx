import { Helmet } from 'react-helmet-async';
import { getProfile } from '@/lib/content';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function SEO({
  title,
  description,
  image = '/assets/og-image.png',
  url = 'https://ahmedolek2004.github.io/Portfolio_project/',
  type = 'website',
}: SEOProps) {
  const profile = getProfile();
  const siteTitle = title ? `${title} | ${profile.name || 'Ahmed Abdelhalim'}` : `${profile.name || 'Ahmed Abdelhalim'} | Frontend Developer`;
  const metaDescription = description || profile.biography || 'Ahmed Abdelhalim is an Information Technology student and frontend developer focused on React, TypeScript, JavaScript, responsive web applications, and practical IoT projects.';

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name || 'Ahmed Abdelhalim',
    jobTitle: profile.title || 'Frontend Developer',
    description: profile.biography,
    url: url,
    sameAs: [] as string[],
    knowsAbout: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'ESP32',
      'IoT',
    ],
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
    </Helmet>
  );
}
