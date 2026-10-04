import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Tag, ArrowRight } from 'lucide-react';
import { getPublishedBlogPosts } from '@/lib/content';

export function BlogSection() {
  const posts = getPublishedBlogPosts();
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

  const filteredPosts = posts.filter(
    (post) => selectedTag === 'All' || post.tags.includes(selectedTag)
  );

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            Articles & Insights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mt-4 mb-4">
            Technical Writing & Engineering Blog
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Articles on React architecture, TypeScript patterns, web performance, and software engineering.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-slate-900/40 border border-slate-800 max-w-md mx-auto">
            <BookOpen className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-sm">No articles published yet.</p>
            <p className="text-xs text-slate-500 mt-1">Check back soon for new technical writings!</p>
          </div>
        ) : (
          <div>
            {/* Tag Filter Pills */}
            {allTags.length > 1 && (
              <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                      selectedTag === tag
                        ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                        : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-sky-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 text-xs text-slate-400 font-mono">
                      <span>{post.date}</span>
                      {post.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {post.readTime}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-display text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 flex items-center gap-1 font-mono"
                        >
                          <Tag className="w-2.5 h-2.5 text-sky-400" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
