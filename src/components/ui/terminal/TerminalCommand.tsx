import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const TerminalCommand = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-3xl border border-slate-800 bg-slate-950/95 p-5 font-mono text-slate-200 shadow-[0_20px_80px_rgba(0,0,0,0.35)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
TerminalCommand.displayName = 'TerminalCommand';
