import React from 'react';
import { Tooltip } from '../ui/tooltip';

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  tooltip?: string;
}

export function FormField({ label, error, tooltip, children }: FormFieldProps) {
  return (
    <div>
      <div className="flex items-center gap-1">
        <label className="block text-sm font-medium text-primary-700">
          {label}
        </label>
        {tooltip && <Tooltip content={tooltip} />}
      </div>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}