import { PlaceholderFrame } from './PlaceholderFrame';

export function LaptopMockupPlaceholder() {
  return (
    <div style={{ padding: '16px', backgroundColor: 'rgba(15, 23, 42, 0.8)', borderRadius: '16px' }}>
      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          margin: '0 auto',
          borderRadius: '12px 12px 0 0',
          border: '2px solid rgba(148, 163, 184, 0.3)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '24px',
            backgroundColor: 'rgba(148, 163, 184, 0.15)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            gap: '6px',
          }}
        >
          {['#EF4444', '#F59E0B', '#22C55E'].map((color) => (
            <span
              key={color}
              style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: color }}
            />
          ))}
        </div>
        <PlaceholderFrame label="" aspectRatio="16 / 10" icon="💻" />
      </div>
      <div
        style={{
          width: '120px',
          height: '8px',
          margin: '0 auto',
          backgroundColor: 'rgba(148, 163, 184, 0.2)',
          borderRadius: '0 0 8px 8px',
        }}
      />
    </div>
  );
}
