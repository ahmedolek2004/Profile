import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin } from 'lucide-react';
import { getContact, getProfile } from '@/lib/content';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export function ContactSection() {
  const contact = getContact();
  const profile = getProfile();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'redirected' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const serviceId = EMAILJS_SERVICE_ID || contact.form.serviceId;
  const templateId = EMAILJS_TEMPLATE_ID || contact.form.templateId;
  const publicKey = EMAILJS_PUBLIC_KEY || contact.form.publicKey;
  const recipientEmail = contact.email || profile.email;

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    setErrorMessage(null);

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
          },
          publicKey
        );
        setStatus('success');
        reset();
      } catch (err) {
        console.error('EmailJS submit error:', err);
        setStatus('error');
        setErrorMessage('Failed to send message. Please email directly instead.');
      }
    } else if (recipientEmail) {
      // No email service configured — open the visitor's own mail client
      // instead. This does NOT confirm delivery, so it is reported as
      // "redirected", not "success".
      const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${data.subject}`);
      const mailtoBody = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
      window.location.href = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus('redirected');
      reset();
    } else {
      setStatus('error');
      setErrorMessage('Contact form is not configured yet. Please reach out via the details above.');
    }
  };


  return (
    <section className="py-24 px-4 relative bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mt-4 mb-4">
            {contact.heading || 'Get In Touch'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {contact.subheading || "Have an engineering role or project opportunity? Reach out directly below."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-100">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email || profile.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-slate-300 hover:text-sky-400 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono block">Direct Email</span>
                    <span className="text-sm font-semibold">{contact.email || profile.email || 'ahmed.abdelhalim.dev@gmail.com'}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono block">Location</span>
                    <span className="text-sm font-semibold">{contact.location || profile.location || 'Alexandria, Egypt'}</span>
                  </div>
                </div>
              </div>

              {/* Availability Badges */}
              {contact.availability && contact.availability.length > 0 && (
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-slate-300 block mb-2">Availability Status:</span>
                  <div className="flex flex-wrap gap-2">
                    {contact.availability.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Accounts */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-300 block mb-3">Connect on Social Platforms:</span>
                <div className="flex items-center gap-3">
                  {contact.links.github && (
                    <a
                      href={contact.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
                      aria-label="GitHub Link"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {contact.links.linkedin && (
                    <a
                      href={contact.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
                      aria-label="LinkedIn Link"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-6"
            >
              <h3 className="text-xl font-bold font-display text-slate-100 mb-2">Send a Message</h3>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Your message was sent successfully. I'll reply to you shortly.</span>
                </div>
              )}

              {status === 'redirected' && (
                <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>Opened your email app with the message pre-filled — just hit send there to reach me.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage || 'An error occurred while submitting. Please try emailing directly.'}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Your Name *</label>
                  <input
                    type="text"
                    {...register('name')}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Your Email *</label>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Subject *</label>
                <input
                  type="text"
                  {...register('subject')}
                  placeholder="Software Engineer Role / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                />
                {errors.subject && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Message *</label>
                <textarea
                  rows={5}
                  {...register('message')}
                  placeholder="Hi Ahmed, I reviewed your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                />
                {errors.message && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
