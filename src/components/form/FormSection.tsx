import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="border-t border-gray-200 pt-6 mt-6 first:border-0 first:pt-0 first:mt-0">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {children}
      </div>
    </div>
  );
}