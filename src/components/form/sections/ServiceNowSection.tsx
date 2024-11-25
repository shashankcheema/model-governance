import React from 'react';
import { FormSection } from '../FormSection';
import { FormField } from '../FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface ServiceNowSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function ServiceNowSection({ register, errors }: ServiceNowSectionProps) {
  return (
    <FormSection title="ServiceNow Information">
      <FormField label="Assignment Group" error={errors.assignment_group?.message}>
        <input
          type="text"
          {...register('assignment_group')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>
    </FormSection>
  );
}