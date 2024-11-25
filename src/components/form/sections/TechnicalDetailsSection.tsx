import React from 'react';
import { FormSection } from '../FormSection';
import { FormField } from '../FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface TechnicalDetailsSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function TechnicalDetailsSection({ register, errors }: TechnicalDetailsSectionProps) {
  return (
    <FormSection title="Technical Details">
      <FormField label="Framework" error={errors.framework?.message}>
        <input
          type="text"
          {...register('framework')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Run Frequency" error={errors.run_frequency?.message}>
        <input
          type="text"
          {...register('run_frequency')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Data Size" error={errors.data_size?.message}>
        <input
          type="number"
          {...register('data_size', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Deployment Date" error={errors.deployment_date?.message}>
        <input
          type="date"
          {...register('deployment_date')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Retirement Date" error={errors.retirement_date?.message}>
        <input
          type="date"
          {...register('retirement_date')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Git Repository URL" error={errors.git_repo_url?.message}>
        <input
          type="url"
          {...register('git_repo_url')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Vendor" error={errors.vendor?.message}>
        <input
          type="text"
          {...register('vendor')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>
    </FormSection>
  );
}