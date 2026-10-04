import { useState } from 'react';
import { ProjectScreenshotPlaceholder } from './ProjectScreenshotPlaceholder';

interface ContentImageProps {
  src?: string;
  alt: string;
  aspectRatio?: string;
}

export function ContentImage({
  src,
  alt,
  aspectRatio = '16 / 9',
}: ContentImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return <ProjectScreenshotPlaceholder />;
  }

  return (
    <div style={{ aspectRatio, width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}
