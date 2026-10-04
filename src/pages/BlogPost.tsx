import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react';
import { PageShell } from '@/components/layouts/PageShell';
import { NavbarSection } from '@/components/sections/NavbarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { getBlogPostBySlug } from '@/lib/content';
import { NotFound } from '@/pages/404';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post || !post.published) return <NotFound />;

  return (
    <PageShell>
      <NavbarSection />
      <main className="pt-28 pb-24 px-4 min-h-screen">
        <article className="max-w-3xl mx-auto space-y-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <header className="space-y-4 border-b border-slate-800 pb-8">
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-100 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              {post.date && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {post.date}
                </span>
              )}
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-sky-400" />
                  {post.author}
                </span>
              )}
              {post.readTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  {post.readTime}
                </span>
              )}
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1 font-mono"
                  >
                    <Tag className="w-3 h-3 text-sky-400" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Markdown Post Content */}
          <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <FooterSection />
    </PageShell>
  );
}
