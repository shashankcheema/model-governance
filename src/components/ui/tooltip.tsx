import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TooltipProps {
  content: string;
  className?: string;
}

export function Tooltip({ content, className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <Info
        className={cn(
          "h-4 w-4 text-primary-400 hover:text-accent cursor-help transition-colors",
          className
        )}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      {isVisible && (
        <div className="absolute z-50 w-64 px-3 py-2 text-sm text-white bg-primary-900 rounded-lg shadow-lg -top-1 left-6">
          <div className="absolute w-2 h-2 bg-primary-900 transform rotate-45 -left-1 top-2" />
          {content}
        </div>
      )}
    </div>
  );
}