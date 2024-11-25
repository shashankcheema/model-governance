import React from 'react';
import { FormSection } from '../FormSection';
import { FormField } from '../FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface InfrastructureSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function InfrastructureSection({ register, errors }: InfrastructureSectionProps) {
  return (
    <FormSection title="Infrastructure Information">
      <FormField label="Namespace" error={errors.namespace_name?.message}>
        <input
          type="text"
          {...register('namespace_name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Cluster" error={errors.cluster_name?.message}>
        <input
          type="text"
          {...register('cluster_name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="VM Info" error={errors.vm_info?.message}>
        <input
          type="text"
          {...register('vm_info')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Container Image" error={errors.container_image_info?.message}>
        <input
          type="text"
          {...register('container_image_info')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Trident Onboarded" error={errors.trident_onboarded?.message}>
        <select
          {...register('trident_onboarded')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </FormField>
    </FormSection>
  );
}