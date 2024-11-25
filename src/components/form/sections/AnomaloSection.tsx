import React from 'react';
import { FormSection } from '../FormSection';
import { FormField } from '../FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface AnomaloSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function AnomaloSection({ register, errors }: AnomaloSectionProps) {
  return (
    <FormSection title="Anomalo Information">
      <FormField label="Status" error={errors.anomalo_status?.message}>
        <input
          type="text"
          {...register('anomalo_status')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="DQ Checks Info" error={errors.dq_checks_info?.message}>
        <textarea
          {...register('dq_checks_info')}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>
    </FormSection>
  );
}