import { useEffect, useState } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      setDirection(current > lastScroll ? 'down' : 'up');
      lastScroll = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return direction;
}
