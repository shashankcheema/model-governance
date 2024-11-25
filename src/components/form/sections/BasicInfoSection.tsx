import React from 'react';
import { FormSection } from '../FormSection';
import { FormField } from '../FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface BasicInfoSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function BasicInfoSection({ register, errors }: BasicInfoSectionProps) {
  return (
    <FormSection title="Basic Information">
      <FormField 
        label="Model Name" 
        error={errors.name?.message}
        tooltip="Unique identifier for the model in human-readable format"
      >
        <input
          type="text"
          {...register('name')}
          className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-accent focus:ring-accent"
        />
      </FormField>

      <FormField 
        label="Risk Tier" 
        error={errors.riskTier?.message}
        tooltip="Assessment of model risk level based on business impact and complexity"
      >
        <select
          {...register('riskTier')}
          className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-accent focus:ring-accent"
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
          <option value="CRITICAL">Critical</option>
        </select>
      </FormField>

      <FormField 
        label="JIRA ID" 
        error={errors.jira_id?.message}
        tooltip="Associated JIRA ticket ID for model tracking"
      >
        <input
          type="text"
          {...register('jira_id')}
          className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-accent focus:ring-accent"
        />
      </FormField>

      <FormField 
        label="MDLX ID" 
        error={errors.mdlx_id?.message}
        tooltip="Model registry identifier in MDLX system"
      >
        <input
          type="text"
          {...register('mdlx_id')}
          className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-accent focus:ring-accent"
        />
      </FormField>

      <FormField 
        label="Deployment Type" 
        error={errors.deploymentType?.message}
        tooltip="Current deployment environment of the model"
      >
        <select
          {...register('deploymentType')}
          className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-accent focus:ring-accent"
        >
          <option value="PRODUCTION">Production</option>
          <option value="STAGING">Staging</option>
          <option value="DEVELOPMENT">Development</option>
        </select>
      </FormField>

      <FormField 
        label="Line of Business" 
        error={errors.lob?.message}
        tooltip="Business unit responsible for the model"
      >
        <select
          {...register('lob')}
          className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-accent focus:ring-accent"
        >
          <option value="RETAIL">Retail Banking</option>
          <option value="COMMERCIAL">Commercial Banking</option>
          <option value="INVESTMENT">Investment Banking</option>
          <option value="INSURANCE">Insurance</option>
          <option value="WEALTH_MANAGEMENT">Wealth Management</option>
        </select>
      </FormField>

      <FormField 
        label="Description" 
        error={errors.description?.message}
        tooltip="Detailed description of the model's purpose and functionality"
      >
        <textarea
          {...register('description')}
          rows={3}
          className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-accent focus:ring-accent"
        />
      </FormField>
    </FormSection>
  );
}