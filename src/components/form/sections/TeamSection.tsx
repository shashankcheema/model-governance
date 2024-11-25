import React from 'react';
import { FormSection } from '../FormSection';
import { FormField } from '../FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface TeamSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function TeamSection({ register, errors }: TeamSectionProps) {
  return (
    <FormSection title="Team Information">
      <FormField label="Owner" error={errors.owner?.message}>
        <input
          type="text"
          {...register('owner')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Sponsor" error={errors.model_sponsor?.message}>
        <input
          type="text"
          {...register('model_sponsor')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Lead Developer" error={errors.model_lead_developer?.message}>
        <input
          type="text"
          {...register('model_lead_developer')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Reporter" error={errors.model_reporter?.message}>
        <input
          type="text"
          {...register('model_reporter')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Issue Creator" error={errors.model_issue_creator?.message}>
        <input
          type="text"
          {...register('model_issue_creator')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>
    </FormSection>
  );
}