import { type AnchorHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const NavLinkPrimary = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        'rounded-full px-4 py-2 text-sm font-medium text-slate-100 transition-all duration-200 hover:bg-slate-900/80 hover:text-sky-300',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
);
NavLinkPrimary.displayName = 'NavLinkPrimary';
