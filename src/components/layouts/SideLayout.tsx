import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const SideLayout = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('grid min-h-screen gap-8 bg-transparent lg:grid-cols-[300px_1fr] lg:items-start', className)}
      {...props}
    >
      {children}
    </div>
  )
);
SideLayout.displayName = 'SideLayout';
