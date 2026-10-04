import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const PageShell = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('min-h-screen', className)} style={{ backgroundColor: '#020617', color: '#F8FAFC' }} {...props}>
      {children}
    </div>
  )
);
PageShell.displayName = 'PageShell';
