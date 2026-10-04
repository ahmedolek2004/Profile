import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const SectionShell = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => (
    <section ref={ref} className={cn('relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8', className)} {...props}>
      {children}
    </section>
  )
);
SectionShell.displayName = 'SectionShell';
