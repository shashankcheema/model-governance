import React from 'react';
import { FormSection } from '../FormSection';
import { FormField } from '../FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface SLASectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function SLASection({ register, errors }: SLASectionProps) {
  return (
    <FormSection title="SLA Information">
      <FormField label="Runtime (minutes)" error={errors.runtime_minutes?.message}>
        <input
          type="number"
          {...register('runtime_minutes', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>
    </FormSection>
  );
}