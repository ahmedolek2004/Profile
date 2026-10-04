import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full border border-sky-400/30 bg-sky-400/10 backdrop-blur-xl"
      style={{ transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)` }}
    />
  );
}
