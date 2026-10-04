import { PlaceholderFrame } from './PlaceholderFrame';

export function VideoPlaceholder() {
  return (
    <div style={{ position: 'relative' }}>
      <PlaceholderFrame label="Demo video coming soon" aspectRatio="16 / 9" icon="▶️" />
    </div>
  );
}
