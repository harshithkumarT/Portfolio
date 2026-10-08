import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  as = 'button',
  href,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-cyan-500 text-black hover:bg-cyan-400 font-semibold shadow-[0_0_20px_rgba(0,255,255,0.25)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]',
    secondary: 'bg-white/10 text-white hover:bg-white/20',
    outline: 'border border-white/20 text-white hover:bg-white/5 hover:border-cyan-500/40',
    ghost: 'text-white/60 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
  };

  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition-all cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none',
    variants[variant],
    sizes[size],
    className
  );

  if (as === 'a' || href) {
    const { type, ...anchorProps } = props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        href={href}
        className={baseClasses}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      {...props}
    >
      {children}
    </button>
  );
};
