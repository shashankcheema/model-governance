### Phase 3: Page Components (Week 3)

#### 3.1 Model List Page

1. ModelList Component (src/pages/ModelList.tsx)
```tsx
import React, { useState, useMemo } from 'react';
import { Plus, ListFilter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockModels } from '../lib/mock-data';
import { ModelCard } from '../components/ModelCard';
import { SearchFilters } from '../components/SearchFilters';
import type { ModelFilters } from '../types/model';

export function ModelList() {
  const [filters, setFilters] = useState<ModelFilters>({});

  const filteredModels = useMemo(() => {
    return mockModels.filter(model => {
      // Filter implementation
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const searchableText = [
          model.model_name,
          model.metadata?.model_description,
          model.model_jira_id,
          model.model_mdlx_id,
          model.framework_name,
          model.vendor_name,
          model.roles?.model_owner
        ].filter(Boolean).join(' ').toLowerCase();
        
        if (!searchableText.includes(searchTerm)) {
          return false;
        }
      }

      // Additional filters
      if (filters.riskTier && model.model_risk_tier !== filters.riskTier) {
        return false;
      }

      if (filters.deploymentType && model.deployment_type_name !== filters.deploymentType) {
        return false;
      }

      if (filters.lob && model.lob_name !== filters.lob) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary-900">Model Inventory</h1>
          <span className="text-sm text-primary-500">({filteredModels.length} total)</span>
        </div>
        <Link
          to="/models/new"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-dark transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Model
        </Link>
      </div>

      {/* Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow-custom">
        <div className="flex items-center gap-2 text-sm text-primary-500 mb-4">
          <ListFilter className="h-4 w-4" />
          <span>Filter Models</span>
        </div>
        <SearchFilters filters={filters} onFilterChange={setFilters} />
      </div>

      {/* Models Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredModels.map((model) => (
          <ModelCard key={`model-${model.model_id}`} model={model} />
        ))}
        {filteredModels.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-primary-500">No models found matching your criteria.</p>
            <button
              onClick={() => setFilters({})}
              className="mt-2 text-accent hover:text-accent-dark"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

#### 3.2 Model Detail Page

1. ModelDetail Component (src/pages/ModelDetail.tsx)
```tsx
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

export function ModelDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const model = mockModels.find(m => m.model_id === Number(id));

  // Handle model not found
  if (!model) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-primary-900">Model not found</h2>
        <p className="mt-2 text-primary-600">The requested model could not be found.</p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center text-accent hover:text-accent-dark"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Models
        </Link>
      </div>
    );
  }

  // Handle delete action
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this model?')) {
      navigate('/');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
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

        {/* Model Title and Description */}
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

        {/* Quick Info Grid */}
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
        {/* Schema Information */}
        {model.schema && (
          <MetadataSection title="Schema Information">
            <div className="space-y-4">
              <div className="flex items-center">
                <Database className="h-5 w-5 text-accent mr-2" />
                <span className="text-primary-600">{model.schema.model_schema_name}</span>
              </div>
              
              {/* Input Tables */}
              {model.schema.model_input_tables.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-primary-900">Input Tables</h4>
                  <ul className="space-y-1">
                    {model.schema.model_input_tables.map((table, index) => (
                      <li key={index} className="flex items-center">
                        <Database className="h-4 w-4 text-accent mr-2" />
                        <span className="text-sm text-primary-600">{table}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Output Tables */}
              {model.schema.model_output_tables.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-primary-900">Output Tables</h4>
                  <ul className="space-y-1">
                    {model.schema.model_output_tables.map((table, index) => (
                      <li key={index} className="flex items-center">
                        <Database className="h-4 w-4 text-accent mr-2" />
                        <span className="text-sm text-primary-600">{table}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Source Tables */}
              {model.schema.model_source_tables.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-primary-900">Source Tables</h4>
                  <ul className="space-y-1">
                    {model.schema.model_source_tables.map((table, index) => (
                      <li key={index} className="flex items-center">
                        <Database className="h-4 w-4 text-accent mr-2" />
                        <span className="text-sm text-primary-600">{table}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </MetadataSection>
        )}

        {/* Infrastructure Information */}
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

        {/* ServiceNow Information */}
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

        {/* Anomalo Information */}
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

        {/* SLA Information */}
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
```

[Continue with more implementation sections...]