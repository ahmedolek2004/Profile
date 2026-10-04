import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost';
}

export const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({ className, variant = 'solid', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full border px-5 py-3 font-semibold transition-all duration-200',
          variant === 'solid'
            ? 'border-transparent bg-sky-400 text-slate-950 hover:bg-sky-300'
            : 'border-slate-700 bg-transparent text-slate-100 hover:border-sky-400 hover:text-sky-300',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
ButtonPrimary.displayName = 'ButtonPrimary';
