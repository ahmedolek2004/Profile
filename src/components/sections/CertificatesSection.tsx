import { getCertificates } from '@/lib/content';
import { Award, ExternalLink, Calendar, FileText } from 'lucide-react';
import { CertificatePlaceholder } from '@/components/placeholders';

export function CertificatesSection() {
  const certificates = getCertificates();
  const hasCertificates = certificates.items && certificates.items.length > 0;

  return (
    <section className="py-24 px-4 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            Qualifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-100 mt-4 mb-4">
            Certificates & Professional Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified certifications, technical credentials, and specialized engineering coursework.
          </p>
        </div>

        {hasCertificates ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.items.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 text-base">{cert.title}</h3>
                      <p className="text-xs text-sky-400 font-medium">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>Issued: {cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs font-mono text-slate-500 mb-4">ID: {cert.credentialId}</p>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-slate-200 font-medium flex items-center gap-1"
                    >
                      <FileText className="w-3 h-3" />
                      <span>View PDF</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
            <div className="max-w-md mx-auto mb-4">
              <CertificatePlaceholder />
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-2">Verified Credentials Section</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Technical certifications and official course credentials will be displayed here as they are completed and verified.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
