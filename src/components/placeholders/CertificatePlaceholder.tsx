import { PlaceholderFrame } from './PlaceholderFrame';

interface CertificatePlaceholderProps {
  title?: string;
}

export function CertificatePlaceholder({ title = 'Certificate' }: CertificatePlaceholderProps) {
  return (
    <div
      style={{
        borderRadius: '12px',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        overflow: 'hidden',
      }}
    >
      <PlaceholderFrame label="" aspectRatio="4 / 3" icon="📜" />
      <div style={{ padding: '20px' }}>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#94A3B8',
            marginBottom: '8px',
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: '13px', color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
          Issuer, date, and credential details will appear here.
        </p>
      </div>
    </div>
  );
}
