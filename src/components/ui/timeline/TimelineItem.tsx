import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const TimelineItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.25)]', className)}
      {...props}
    >
      <div className="absolute left-0 top-0 h-full w-px bg-slate-700/80" />
      <div className="relative ml-5">{children}</div>
    </div>
  )
);
TimelineItem.displayName = 'TimelineItem';
