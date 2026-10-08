import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  className,
  center = true,
}: SectionHeadingProps) => {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};
