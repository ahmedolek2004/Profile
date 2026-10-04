interface SectionHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
}

export function SectionHeader({ title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: '60px', textAlign: 'center' }}>
      <h2
        style={{
          fontSize: '40px',
          fontWeight: '700',
          color: '#F8FAFC',
          marginBottom: '16px',
          fontFamily: 'Space Grotesk, sans-serif',
        }}
      >
        {highlight ? (
          <>
            {title} <span style={{ color: '#38BDF8' }}>{highlight}</span>
          </>
        ) : (
          title
        )}
      </h2>
      <div
        style={{
          width: '60px',
          height: '4px',
          backgroundColor: '#38BDF8',
          margin: '0 auto',
          marginBottom: subtitle ? '24px' : undefined,
        }}
      />
      {subtitle && (
        <p
          style={{
            fontSize: '16px',
            color: '#94A3B8',
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
