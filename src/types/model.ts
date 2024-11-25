/**
 * Type definitions for the Model Inventory Management System
 */

import { z } from 'zod';

/**
 * Risk tier levels for models
 */
export type RiskTier = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

/**
 * Deployment environment types
 */
export type DeploymentType = 'PRODUCTION' | 'STAGING' | 'DEVELOPMENT';

/**
 * Lines of business
 */
export type LOB = 'RETAIL' | 'COMMERCIAL' | 'INVESTMENT' | 'INSURANCE' | 'WEALTH_MANAGEMENT';

/**
 * Schema information for a model
 */
export interface ModelSchema {
  model_schema_name: string;
  model_input_tables: string[];
  model_output_tables: string[];
  model_source_tables: string[];
}

/**
 * Infrastructure details for a model
 */
export interface ModelInfra {
  namespace_name: string;
  cluster_name: string;
  vm_info: string;
  container_image_info: string;
  trident_onboarded: boolean;
}

/**
 * ServiceNow integration details
 */
export interface ServiceNow {
  assignment_group: string;
}

/**
 * Anomalo monitoring information
 */
export interface Anomalo {
  anomalo_status: string;
  dq_checks_info: string;
}

/**
 * SLA tracking information
 */
export interface SLA {
  runtime_minutes: number;
}

/**
 * Team roles and responsibilities
 */
export interface ModelRoles {
  model_owner: string;
  model_sponsor?: string;
  model_lead_developer?: string;
  model_reporter?: string;
  model_issue_creator?: string;
}

/**
 * Complete model information
 */
export interface Model {
  model_id: number;
  model_jira_id?: string;
  model_mdlx_id?: string;
  model_risk_tier: RiskTier;
  model_name: string;
  model_application_name?: string;
  deployment_type_name: DeploymentType;
  deployment_date?: string;
  retirement_date?: string;
  lob_name: LOB;
  framework_name?: string;
  vendor_name?: string;
  git_repo_url?: string;
  created_at: string;
  updated_at: string;
  metadata?: {
    model_description?: string;
    model_requirements?: string;
    model_assumptions?: string;
    model_variable_selections?: string;
  };
  roles?: ModelRoles;
  schema?: ModelSchema;
  infra?: ModelInfra;
  service_now?: ServiceNow;
  anomalo?: Anomalo;
  sla?: SLA;
}

/**
 * Filter options for the model list
 */
export interface ModelFilters {
  search?: string;
  riskTier?: RiskTier;
  deploymentType?: DeploymentType;
  lob?: LOB;
}