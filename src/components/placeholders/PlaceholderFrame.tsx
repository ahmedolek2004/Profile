import type { CSSProperties, ReactNode } from 'react';

interface PlaceholderFrameProps {
  label: string;
  aspectRatio?: string;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function PlaceholderFrame({
  label,
  aspectRatio = '16 / 9',
  icon,
  style,
}: PlaceholderFrameProps) {
  return (
    <div
      style={{
        aspectRatio,
        width: '100%',
        borderRadius: '12px',
        border: '1px solid rgba(148, 163, 184, 0.18)',
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '24px',
        textAlign: 'center',
        ...style,
      }}
    >
      {icon && (
        <div style={{ color: '#38BDF8', opacity: 0.6, fontSize: '28px' }}>{icon}</div>
      )}
      {label && (
        <span
          style={{
            fontSize: '12px',
            fontWeight: '500',
            color: '#64748B',
            letterSpacing: '0.03em',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
