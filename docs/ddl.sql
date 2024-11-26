-- Table: framework_info
CREATE TABLE framework_info (
    framework_id SERIAL PRIMARY KEY,
    framework_name VARCHAR(50) UNIQUE
);

-- Table: deployment_type_info
CREATE TABLE deployment_type_info (
    deployment_type_id SERIAL PRIMARY KEY,
    deployment_type_name VARCHAR(20) UNIQUE
);

-- Table: run_frequency_info
CREATE TABLE run_frequency_info (
    run_frequency_id SERIAL PRIMARY KEY,
    run_frequency_name VARCHAR(50) UNIQUE
);

-- Table: vendor_info
CREATE TABLE vendor_info (
    vendor_id SERIAL PRIMARY KEY,
    vendor_name VARCHAR(100) UNIQUE
);

-- Table: model_input_tables_info
CREATE TABLE model_input_tables_info (
    model_input_id SERIAL PRIMARY KEY,
    model_input_table_name VARCHAR(255)
);

-- Table: model_output_tables_info
CREATE TABLE model_output_tables_info (
    model_output_id SERIAL PRIMARY KEY,
    model_output_table_name VARCHAR(255)
);

-- Table: model_source_tables_info
CREATE TABLE model_source_tables_info (
    model_source_id SERIAL PRIMARY KEY,
    model_source_table_name VARCHAR(255)
);

-- Table: model_schema_info_table
CREATE TABLE model_schema_info_table (
    model_schema_id SERIAL PRIMARY KEY,
    model_schema_name VARCHAR(100),
    model_input_id INT REFERENCES model_input_tables_info(model_input_id),
    model_output_id INT REFERENCES model_output_tables_info(model_output_id),
    model_source_id INT REFERENCES model_source_tables_info(model_source_id)
);

-- Table: lob_info_table
CREATE TABLE lob_info_table (
    lob_id SERIAL PRIMARY KEY,
    lob_name VARCHAR(100)
);

-- Table: infra_info_table
CREATE TABLE infra_info_table (
    infra_id SERIAL PRIMARY KEY,
    namespace_name VARCHAR(100),
    cluster_name VARCHAR(100),
    vm_info VARCHAR(255),
    trident_onboarded BOOLEAN,
    container_image_info VARCHAR(255)
);

-- Table: service_now_info_table
CREATE TABLE service_now_info_table (
    service_now_info_id SERIAL PRIMARY KEY,
    assignment_group VARCHAR(100)
);

-- Table: anomalo_info_table
CREATE TABLE anomalo_info_table (
    anomalo_id SERIAL PRIMARY KEY,
    anomalo_status VARCHAR(50),
    dq_checks_info VARCHAR(255)
);

-- Table: sla_info_table
CREATE TABLE sla_info_table (
    sla_info_id SERIAL PRIMARY KEY,
    runtime_minutes INT
);

-- Optimized Core Table: model_info
CREATE TABLE model_info (
    model_id SERIAL PRIMARY KEY,
    model_jira_id VARCHAR(50),
    model_mdlx_id VARCHAR(50),
    model_risk_tier VARCHAR(20),
    model_name VARCHAR(100),
    model_application_name VARCHAR(100),
    run_frequency_id INT REFERENCES run_frequency_info(run_frequency_id),
    data_size BIGINT,
    framework_id INT REFERENCES framework_info(framework_id),
    deployment_type_id INT REFERENCES deployment_type_info(deployment_type_id),
    deployment_date DATE,
    retirement_date DATE,
    git_repo_url VARCHAR(255),
    lob_id INT REFERENCES lob_info_table(lob_id),
    model_schema_id INT REFERENCES model_schema_info_table(model_schema_id),
    infra_id INT REFERENCES infra_info_table(infra_id),
    service_now_info_id INT REFERENCES service_now_info_table(service_now_info_id),
    anomalo_id INT REFERENCES anomalo_info_table(anomalo_id),
    sla_info_id INT REFERENCES sla_info_table(sla_info_id),
    vendor_id INT REFERENCES vendor_info(vendor_id)
);

-- New Table: model_metadata
CREATE TABLE model_metadata (
    model_metadata_id SERIAL PRIMARY KEY,
    model_id INT REFERENCES model_info(model_id) ON DELETE CASCADE,
    model_description TEXT,
    model_requirements TEXT,
    model_assumptions TEXT,
    model_variable_selections TEXT,
    model_estimations TEXT,
    model_approvals TEXT,
    model_mrm_validations TEXT
);

-- New Table: model_roles
CREATE TABLE model_roles (
    model_role_id SERIAL PRIMARY KEY,
    model_id INT REFERENCES model_info(model_id) ON DELETE CASCADE,
    model_owner VARCHAR(100),
    model_sponsor VARCHAR(100),
    model_lead_developer VARCHAR(100),
    model_reporter VARCHAR(100),
    model_issue_creator VARCHAR(100)
);

-- Indexes for model_info
CREATE INDEX idx_model_jira_id ON model_info(model_jira_id);
CREATE INDEX idx_model_mdlx_id ON model_info(model_mdlx_id);
CREATE INDEX idx_model_risk_tier ON model_info(model_risk_tier);
CREATE INDEX idx_lob_id ON model_info(lob_id);
CREATE INDEX idx_framework_id ON model_info(framework_id);
CREATE INDEX idx_deployment_type_id ON model_info(deployment_type_id);

-- Indexes for model_input_tables_info
CREATE INDEX idx_model_input_table_name ON model_input_tables_info(model_input_table_name);

-- Indexes for model_output_tables_info
CREATE INDEX idx_model_output_table_name ON model_output_tables_info(model_output_table_name);

-- Indexes for model_source_tables_info
CREATE INDEX idx_model_source_table_name ON model_source_tables_info(model_source_table_name);

-- Indexes for model_schema_info_table
CREATE INDEX idx_model_input_id ON model_schema_info_table(model_input_id);
CREATE INDEX idx_model_output_id ON model_schema_info_table(model_output_id);
CREATE INDEX idx_model_source_id ON model_schema_info_table(model_source_id);

-- Indexes for infra_info_table
CREATE INDEX idx_namespace_name ON infra_info_table(namespace_name);
CREATE INDEX idx_cluster_name ON infra_info_table(cluster_name);

-- Indexes for service_now_info_table
CREATE INDEX idx_assignment_group ON service_now_info_table(assignment_group);

-- Indexes for anomalo_info_table
CREATE INDEX idx_anomalo_status ON anomalo_info_table(anomalo_status);

-- Indexes for lob_info_table
CREATE INDEX idx_lob_name ON lob_info_table(lob_name);

-- Indexes for sla_info_table
CREATE INDEX idx_runtime_minutes ON sla_info_table(runtime_minutes);

-- Indexes for run_frequency_info
CREATE INDEX idx_run_frequency_name ON run_frequency_info(run_frequency_name);
