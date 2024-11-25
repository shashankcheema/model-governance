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

      <div className="bg-white p-4 rounded-lg shadow-custom">
        <div className="flex items-center gap-2 text-sm text-primary-500 mb-4">
          <ListFilter className="h-4 w-4" />
          <span>Filter Models</span>
        </div>
        <SearchFilters filters={filters} onFilterChange={setFilters} />
      </div>

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