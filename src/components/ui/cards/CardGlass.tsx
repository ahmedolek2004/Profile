import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const CardGlass = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-[32px] border border-white/10 bg-slate-950/40 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl',
        className
      )}
      {...props}
    />
  )
);
CardGlass.displayName = 'CardGlass';
