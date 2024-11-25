import { z } from 'zod';

export const modelSchema = z.object({
  // Basic Information
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  jira_id: z.string().optional(),
  mdlx_id: z.string().optional(),
  riskTier: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  deploymentType: z.enum(['PRODUCTION', 'STAGING', 'DEVELOPMENT']),
  lob: z.enum(['RETAIL', 'COMMERCIAL', 'INVESTMENT', 'INSURANCE', 'WEALTH_MANAGEMENT']),
  
  // Technical Details
  framework: z.string().optional(),
  run_frequency: z.string().optional(),
  data_size: z.number().optional(),
  deployment_date: z.string().optional(),
  retirement_date: z.string().optional(),
  git_repo_url: z.string().url().optional(),
  vendor: z.string().optional(),
  
  // Team Information
  owner: z.string().min(1, 'Owner is required'),
  model_sponsor: z.string().optional(),
  model_lead_developer: z.string().optional(),
  model_reporter: z.string().optional(),
  model_issue_creator: z.string().optional(),
  
  // Schema Information
  schema_name: z.string().optional(),
  input_tables: z.array(
    z.object({
      value: z.string().min(1, 'Table name is required')
    })
  ).optional(),
  output_tables: z.array(
    z.object({
      value: z.string().min(1, 'Table name is required')
    })
  ).optional(),
  source_tables: z.array(
    z.object({
      value: z.string().min(1, 'Table name is required')
    })
  ).optional(),
  
  // Infrastructure Information
  namespace_name: z.string().optional(),
  cluster_name: z.string().optional(),
  vm_info: z.string().optional(),
  container_image_info: z.string().optional(),
  trident_onboarded: z.boolean().optional(),
  
  // ServiceNow Information
  assignment_group: z.string().optional(),
  
  // Anomalo Information
  anomalo_status: z.string().optional(),
  dq_checks_info: z.string().optional(),
  
  // SLA Information
  runtime_minutes: z.number().optional(),
});