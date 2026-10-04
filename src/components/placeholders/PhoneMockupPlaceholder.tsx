import { PlaceholderFrame } from './PlaceholderFrame';

export function PhoneMockupPlaceholder() {
  return (
    <div
      style={{
        width: '220px',
        margin: '0 auto',
        padding: '12px',
        borderRadius: '28px',
        border: '3px solid rgba(148, 163, 184, 0.3)',
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
      }}
    >
      <div
        style={{
          width: '60px',
          height: '6px',
          margin: '0 auto 12px',
          borderRadius: '999px',
          backgroundColor: 'rgba(148, 163, 184, 0.2)',
        }}
      />
      <PlaceholderFrame label="" aspectRatio="9 / 16" icon="📱" />
    </div>
  );
}
