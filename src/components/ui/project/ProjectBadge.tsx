import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const ProjectBadge = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400', className)}
      {...props}
    >
      {children}
    </span>
  )
);
ProjectBadge.displayName = 'ProjectBadge';
