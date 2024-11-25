## Validation Schema

### Implementation

```tsx
// src/schemas/modelSchema.ts
import { z } from 'zod';

export const modelSchema = z.object({
  // Basic Information
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  description: z.string()
    .optional(),
  jira_id: z.string()
    .regex(/^MDL-\d+$/, 'Invalid JIRA ID format')
    .optional(),
  mdlx_id: z.string()
    .regex(/^MDLX-\d+$/, 'Invalid MDLX ID format')
    .optional(),
  riskTier: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  deploymentType: z.enum(['PRODUCTION', 'STAGING', 'DEVELOPMENT']),
  lob: z.enum(['RETAIL', 'COMMERCIAL', 'INVESTMENT', 'INSURANCE', 'WEALTH_MANAGEMENT']),

  // Schema Information
  schema_name: z.string()
    .min(1, 'Schema name is required'),
  input_tables: z.array(
    z.object({
      value: z.string().min(1, 'Table name is required')
    })
  ),
  output_tables: z.array(
    z.object({
      value: z.string().min(1, 'Table name is required')
    })
  ),
  source_tables: z.array(
    z.object({
      value: z.string().min(1, 'Table name is required')
    })
  ),

  // Infrastructure Information
  namespace_name: z.string()
    .min(1, 'Namespace is required'),
  cluster_name: z.string()
    .min(1, 'Cluster name is required'),
  vm_info: z.string()
    .optional(),
  container_image_info: z.string()
    .optional(),
  trident_onboarded: z.boolean(),

  // Team Information
  owner: z.string()
    .min(1, 'Owner is required'),
  model_sponsor: z.string()
    .optional(),
  model_lead_developer: z.string()
    .optional(),
  model_reporter: z.string()
    .optional(),
  model_issue_creator: z.string()
    .optional(),

  // ServiceNow Information
  assignment_group: z.string()
    .min(1, 'Assignment group is required'),

  // Anomalo Information
  anomalo_status: z.string()
    .optional(),
  dq_checks_info: z.string()
    .optional(),

  // SLA Information
  runtime_minutes: z.number()
    .min(0, 'Runtime must be positive')
    .optional(),
});

export type ModelFormData = z.infer<typeof modelSchema>;
```

### Best Practices

1. **Schema Design**
   - Clear validation rules
   - Proper error messages
   - Type inference

2. **Validation Rules**
   - Required fields
   - Format validation
   - Range validation

3. **Error Messages**
   - Clear descriptions
   - Actionable feedback
   - Consistent format

4. **Type Safety**
   - Proper inference
   - Strict validation
   - Clear interfaces