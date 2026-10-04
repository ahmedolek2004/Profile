export function ProfileImagePlaceholder() {
  return (
    <div
      style={{
        aspectRatio: '1 / 1',
        maxWidth: '280px',
        width: '100%',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(56,189,248,0.18), rgba(99,102,241,0.18))',
        border: '1px solid rgba(56,189,248,0.25)',
        color: '#E2E8F0',
        fontFamily: 'Space Grotesk, sans-serif',
        fontWeight: 700,
        fontSize: '2.5rem',
        letterSpacing: '0.02em',
      }}
      aria-hidden="true"
    >
      AA
    </div>
  );
}
