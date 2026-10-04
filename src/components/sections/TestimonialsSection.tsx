import { getTestimonials } from '@/lib/content';
import { MessageSquareQuote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = getTestimonials();
  const hasTestimonials = testimonials.items && testimonials.items.length > 0;

  // Automatically hide section if no real testimonials exist (Rule 27)
  if (!hasTestimonials) {
    return null;
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            Recommendations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mt-4 mb-4">
            Professional Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.items.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative"
            >
              <MessageSquareQuote className="w-8 h-8 text-sky-500/20 mb-4" />
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">&quot;{item.content}&quot;</p>
              <div>
                <h4 className="font-bold text-slate-100 text-sm">{item.name}</h4>
                <p className="text-xs text-slate-400">
                  {item.role} · <span className="text-sky-400">{item.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
