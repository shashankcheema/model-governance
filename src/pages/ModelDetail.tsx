import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Edit,
  Trash2,
  Building2,
  Database,
  GitBranch,
  Box,
  AlertTriangle,
  Clock,
  Users,
  Tag,
  Calendar
} from 'lucide-react';
import { formatDate } from '../lib/utils';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { mockModels } from '../lib/mock-data';

function MetadataSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow-custom p-6 space-y-4">
      <h2 className="text-lg font-semibold text-primary-900">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function TableList({ title, tables }: { title: string; tables: string[] }) {
  if (!tables || tables.length === 0) return null;
  
  return (
    <div className="mb-4">
      <h4 className="text-sm font-medium text-primary-900 mb-2">{title}</h4>
      <ul className="space-y-1">
        {tables.map((table, index) => (
          <li key={index} className="flex items-center">
            <Database className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm text-primary-600">{table}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ModelDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const model = mockModels.find(m => m.model_id === Number(id));

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this model?')) {
      navigate('/');
    }
  };

  if (!model) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-primary-900">Model not found</h2>
        <p className="mt-2 text-primary-600">The requested model could not be found.</p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center text-sm text-accent hover:text-accent-dark"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Models
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow-custom rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-primary-500 hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Models
          </Link>

          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => navigate(`/models/${id}/edit`)}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={handleDelete}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary-900">{model.model_name}</h1>
            <p className="mt-1 text-primary-600">{model.metadata?.model_description}</p>
          </div>
          <Badge variant={model.model_risk_tier === 'CRITICAL' ? 'danger' : 'warning'}>
            <AlertTriangle className="h-3 w-3 mr-1" />
            {model.model_risk_tier}
          </Badge>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center text-primary-600">
            <Box className="h-5 w-5 text-accent mr-2" />
            <span>{model.deployment_type_name}</span>
          </div>
          <div className="flex items-center text-primary-600">
            <Tag className="h-5 w-5 text-accent mr-2" />
            <span>{model.model_jira_id}</span>
          </div>
          <div className="flex items-center text-primary-600">
            <Building2 className="h-5 w-5 text-accent mr-2" />
            <span>{model.lob_name}</span>
          </div>
          <div className="flex items-center text-primary-600">
            <Users className="h-5 w-5 text-accent mr-2" />
            <span>{model.roles?.model_owner}</span>
          </div>
          <div className="flex items-center text-primary-600">
            <Calendar className="h-5 w-5 text-accent mr-2" />
            <span>Deployed: {formatDate(model.deployment_date)}</span>
          </div>
          <div className="flex items-center text-primary-600">
            <Clock className="h-5 w-5 text-accent mr-2" />
            <span>Updated: {formatDate(model.updated_at)}</span>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {model.schema && (
          <MetadataSection title="Schema Information">
            <div className="space-y-4">
              <div className="flex items-center">
                <Database className="h-5 w-5 text-accent mr-2" />
                <span className="text-primary-600">{model.schema.model_schema_name}</span>
              </div>
              
              <TableList 
                title="Input Tables" 
                tables={model.schema.model_input_tables} 
              />
              
              <TableList 
                title="Output Tables" 
                tables={model.schema.model_output_tables} 
              />
              
              <TableList 
                title="Source Tables" 
                tables={model.schema.model_source_tables} 
              />
            </div>
          </MetadataSection>
        )}

        {model.infra && (
          <MetadataSection title="Infrastructure Information">
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-primary-500">Namespace</dt>
                <dd className="mt-1 text-sm text-primary-900">{model.infra.namespace_name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-primary-500">Cluster</dt>
                <dd className="mt-1 text-sm text-primary-900">{model.infra.cluster_name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-primary-500">VM Info</dt>
                <dd className="mt-1 text-sm text-primary-900">{model.infra.vm_info}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-primary-500">Container Image</dt>
                <dd className="mt-1 text-sm text-primary-900">{model.infra.container_image_info}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-sm font-medium text-primary-500">Trident Onboarded</dt>
                <dd className="mt-1 text-sm text-primary-900">
                  {model.infra.trident_onboarded ? 'Yes' : 'No'}
                </dd>
              </div>
            </dl>
          </MetadataSection>
        )}

        {model.service_now && (
          <MetadataSection title="ServiceNow Information">
            <dl>
              <div>
                <dt className="text-sm font-medium text-primary-500">Assignment Group</dt>
                <dd className="mt-1 text-sm text-primary-900">{model.service_now.assignment_group}</dd>
              </div>
            </dl>
          </MetadataSection>
        )}

        {model.anomalo && (
          <MetadataSection title="Anomalo Information">
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-primary-500">Status</dt>
                <dd className="mt-1 text-sm text-primary-900">{model.anomalo.anomalo_status}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-primary-500">DQ Checks</dt>
                <dd className="mt-1 text-sm text-primary-900">{model.anomalo.dq_checks_info}</dd>
              </div>
            </dl>
          </MetadataSection>
        )}

        {model.sla && (
          <MetadataSection title="SLA Information">
            <dl>
              <div>
                <dt className="text-sm font-medium text-primary-500">Runtime (minutes)</dt>
                <dd className="mt-1 text-sm text-primary-900">{model.sla.runtime_minutes}</dd>
              </div>
            </dl>
          </MetadataSection>
        )}
      </div>
    </div>
  );
}