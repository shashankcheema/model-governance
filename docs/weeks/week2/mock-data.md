## Mock Data Setup

### Implementation

```tsx
// src/lib/mock-data.ts
import type { Model } from '../types/model';

export const mockModels: Model[] = [
  {
    model_id: 1,
    model_name: "Customer Churn Predictor",
    model_risk_tier: "HIGH",
    model_application_name: "Churn Analysis System",
    deployment_type_name: "PRODUCTION",
    lob_name: "RETAIL",
    framework_name: "TensorFlow",
    vendor_name: "InternalML",
    git_repo_url: "https://github.com/example/churn-predictor",
    created_at: "2024-03-01T00:00:00.000Z",
    updated_at: "2024-03-15T00:00:00.000Z",
    model_jira_id: "MDL-123",
    model_mdlx_id: "MDLX-456",
    deployment_date: "2024-03-01",
    retirement_date: "2025-03-01",
    metadata: {
      model_description: "Advanced ML model for predicting customer churn probability",
      model_requirements: "Python 3.8+, TensorFlow 2.x",
      model_assumptions: "Requires minimum 6 months of customer data",
      model_variable_selections: "Customer demographics, transaction history, engagement metrics"
    },
    roles: {
      model_owner: "Jane Smith",
      model_sponsor: "John Doe",
      model_lead_developer: "Alice Johnson",
      model_reporter: "Bob Wilson",
      model_issue_creator: "Charlie Brown"
    },
    schema: {
      model_schema_name: "churn_prediction",
      model_input_tables: [
        "customer_features",
        "transaction_history",
        "engagement_metrics"
      ],
      model_output_tables: [
        "churn_predictions",
        "risk_scores"
      ],
      model_source_tables: [
        "customer_data",
        "historical_transactions"
      ]
    },
    infra: {
      namespace_name: "ml-prod",
      cluster_name: "ml-cluster-01",
      vm_info: "m5.xlarge",
      container_image_info: "churn-predictor:v1.0.0",
      trident_onboarded: true
    },
    service_now: {
      assignment_group: "ML-Support-Team"
    },
    anomalo: {
      anomalo_status: "ACTIVE",
      dq_checks_info: "Daily data quality checks on input tables"
    },
    sla: {
      runtime_minutes: 45
    }
  },
  // Add more mock models...
];
```

### Key Considerations

1. **Data Structure**
   - Complete model interface
   - Realistic values
   - Proper typing

2. **Data Quality**
   - Consistent format
   - Valid dates
   - Proper relationships

3. **Data Variety**
   - Different risk tiers
   - Various statuses
   - Multiple LOBs

4. **Testing Scenarios**
   - Edge cases
   - Missing data
   - Special characters

### Best Practices

1. **Type Safety**
   - Complete interfaces
   - Proper validation
   - Clear structure

2. **Data Organization**
   - Logical grouping
   - Clear relationships
   - Consistent format

3. **Maintainability**
   - Clear comments
   - Modular structure
   - Easy updates

4. **Testing Support**
   - Various scenarios
   - Edge cases
   - Error conditions

### Common Pitfalls

1. **Data Structure**
   - Incomplete types
   - Missing fields
   - Invalid values

2. **Data Quality**
   - Inconsistent format
   - Invalid dates
   - Missing relationships

3. **Testing Coverage**
   - Limited scenarios
   - Missing edge cases
   - Poor validation

4. **Maintainability**
   - Poor organization
   - Unclear structure
   - Difficult updates