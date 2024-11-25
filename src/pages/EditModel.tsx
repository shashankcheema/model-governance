import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ModelForm } from '../components/ModelForm';
import { mockModels } from '../lib/mock-data';
import type { Model } from '../types/model';

export function EditModel() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const model = mockModels.find(m => m.model_id === Number(id));

  if (!model) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Model not found</h2>
        <p className="mt-2 text-gray-600">The requested model could not be found.</p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center text-discover-blue hover:text-discover-blue/80"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Models
        </Link>
      </div>
    );
  }

  const initialData = {
    name: model.model_name,
    description: model.metadata?.model_description,
    jira_id: model.model_jira_id,
    mdlx_id: model.model_mdlx_id,
    riskTier: model.model_risk_tier,
    deploymentType: model.deployment_type_name,
    lob: model.lob_name,
    framework: model.framework_name,
    vendor: model.vendor_name,
    git_repo_url: model.git_repo_url,
    deployment_date: model.deployment_date,
    retirement_date: model.retirement_date,
    
    schema_name: model.schema?.model_schema_name,
    input_tables: model.schema?.model_input_tables.map(table => ({ value: table })) || [],
    output_tables: model.schema?.model_output_tables.map(table => ({ value: table })) || [],
    source_tables: model.schema?.model_source_tables.map(table => ({ value: table })) || [],
    
    namespace_name: model.infra?.namespace_name,
    cluster_name: model.infra?.cluster_name,
    vm_info: model.infra?.vm_info,
    container_image_info: model.infra?.container_image_info,
    trident_onboarded: model.infra?.trident_onboarded,
    
    assignment_group: model.service_now?.assignment_group,
    
    anomalo_status: model.anomalo?.anomalo_status,
    dq_checks_info: model.anomalo?.dq_checks_info,
    
    runtime_minutes: model.sla?.runtime_minutes,
    
    owner: model.roles?.model_owner,
    model_sponsor: model.roles?.model_sponsor,
    model_lead_developer: model.roles?.model_lead_developer,
    model_reporter: model.roles?.model_reporter,
    model_issue_creator: model.roles?.model_issue_creator
  };

  const handleSubmit = (data: Partial<Model>) => {
    console.log('Updated model data:', data);
    // In a real app, this would make an API call
    navigate(`/models/${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to={`/models/${id}`}
            className="inline-flex items-center text-sm text-discover-gray-500 hover:text-discover-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Model Details
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-discover-gray-900">
            Edit Model: {model.model_name}
          </h1>
        </div>
      </div>

      <ModelForm
        model={model}
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={() => navigate(`/models/${id}`)}
      />
    </div>
  );
}