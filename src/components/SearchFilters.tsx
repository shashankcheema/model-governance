import React from 'react';
import { Search, AlertTriangle, Box, Building2, Filter } from 'lucide-react';
import type { ModelFilters, RiskTier, DeploymentType, LOB } from '../types/model';

interface SearchFiltersProps {
  filters: ModelFilters;
  onFilterChange: (filters: ModelFilters) => void;
}

export function SearchFilters({ filters, onFilterChange }: SearchFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
        <input
          type="text"
          placeholder="Search by model name or description..."
          className="w-full pl-10 pr-4 py-2.5 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-primary-900 placeholder-primary-400"
          value={filters.search || ''}
          onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
        />
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Risk Tier Filter */}
        <div className="relative">
          <AlertTriangle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
          <select
            className="w-full pl-10 pr-4 py-2.5 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-primary-900 appearance-none cursor-pointer"
            value={filters.riskTier || ''}
            onChange={(e) => onFilterChange({
              ...filters,
              riskTier: e.target.value as RiskTier || undefined
            })}
          >
            <option value="">All Risk Tiers</option>
            <option value="LOW">Low Risk</option>
            <option value="MEDIUM">Medium Risk</option>
            <option value="HIGH">High Risk</option>
            <option value="CRITICAL">Critical Risk</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Filter className="h-4 w-4 text-primary-400" />
          </div>
        </div>

        {/* Deployment Type Filter */}
        <div className="relative">
          <Box className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
          <select
            className="w-full pl-10 pr-4 py-2.5 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-primary-900 appearance-none cursor-pointer"
            value={filters.deploymentType || ''}
            onChange={(e) => onFilterChange({
              ...filters,
              deploymentType: e.target.value as DeploymentType || undefined
            })}
          >
            <option value="">All Deployments</option>
            <option value="PRODUCTION">Production</option>
            <option value="STAGING">Staging</option>
            <option value="DEVELOPMENT">Development</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Filter className="h-4 w-4 text-primary-400" />
          </div>
        </div>

        {/* Line of Business Filter */}
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
          <select
            className="w-full pl-10 pr-4 py-2.5 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white text-primary-900 appearance-none cursor-pointer"
            value={filters.lob || ''}
            onChange={(e) => onFilterChange({
              ...filters,
              lob: e.target.value as LOB || undefined
            })}
          >
            <option value="">All Lines of Business</option>
            <option value="RETAIL">Retail Banking</option>
            <option value="COMMERCIAL">Commercial Banking</option>
            <option value="INVESTMENT">Investment Banking</option>
            <option value="INSURANCE">Insurance</option>
            <option value="WEALTH_MANAGEMENT">Wealth Management</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Filter className="h-4 w-4 text-primary-400" />
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(filters.riskTier || filters.deploymentType || filters.lob) && (
        <div className="flex flex-wrap gap-2 pt-2">
          {filters.riskTier && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
              <AlertTriangle className="h-3 w-3 mr-1" />
              {filters.riskTier} Risk
            </span>
          )}
          {filters.deploymentType && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
              <Box className="h-3 w-3 mr-1" />
              {filters.deploymentType}
            </span>
          )}
          {filters.lob && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
              <Building2 className="h-3 w-3 mr-1" />
              {filters.lob.replace('_', ' ')}
            </span>
          )}
          <button
            onClick={() => onFilterChange({})}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-primary-600 hover:text-primary-800 hover:bg-primary-50"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}