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
  {
    model_id: 2,
    model_name: "Fraud Detection System",
    model_risk_tier: "CRITICAL",
    model_application_name: "Transaction Security",
    deployment_type_name: "PRODUCTION",
    lob_name: "COMMERCIAL",
    framework_name: "PyTorch",
    vendor_name: "FraudGuard",
    git_repo_url: "https://github.com/example/fraud-detection",
    created_at: "2024-02-15T00:00:00.000Z",
    updated_at: "2024-03-10T00:00:00.000Z",
    model_jira_id: "MDL-124",
    model_mdlx_id: "MDLX-457",
    deployment_date: "2024-02-15",
    retirement_date: "2025-02-15",
    metadata: {
      model_description: "Real-time transaction fraud detection model",
      model_requirements: "Python 3.9+, PyTorch 2.x",
      model_assumptions: "Real-time transaction data available",
      model_variable_selections: "Transaction patterns, user behavior, location data"
    },
    roles: {
      model_owner: "David Lee",
      model_sponsor: "Sarah Chen",
      model_lead_developer: "Mike Ross",
      model_reporter: "Rachel Green",
      model_issue_creator: "Joey Tribbiani"
    },
    schema: {
      model_schema_name: "fraud_detection",
      model_input_tables: [
        "transaction_stream",
        "user_profiles",
        "device_fingerprints"
      ],
      model_output_tables: [
        "fraud_scores",
        "alert_triggers"
      ],
      model_source_tables: [
        "historical_fraud_cases",
        "user_behavior_logs"
      ]
    },
    infra: {
      namespace_name: "ml-prod",
      cluster_name: "ml-cluster-02",
      vm_info: "c5.2xlarge",
      container_image_info: "fraud-detector:v2.1.0",
      trident_onboarded: true
    },
    service_now: {
      assignment_group: "Fraud-Detection-Support"
    },
    anomalo: {
      anomalo_status: "ACTIVE",
      dq_checks_info: "Real-time data quality monitoring"
    },
    sla: {
      runtime_minutes: 1
    }
  }
];