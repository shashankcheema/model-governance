import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  Box, 
  Clock, 
  Building2, 
  Users, 
  Database,
  Tag,
  GitBranch,
  Calendar
} from 'lucide-react';
import { Model } from '../types/model';
import { cn, formatDate } from '../lib/utils';
import { Badge } from './ui/badge';

interface ModelCardProps {
  model: Model;
}

export function ModelCard({ model }: ModelCardProps) {
  const riskVariants = {
    LOW: 'success',
    MEDIUM: 'warning',
    HIGH: 'warning',
    CRITICAL: 'danger',
  } as const;

  const lobLabels = {
    RETAIL: 'Retail Banking',
    COMMERCIAL: 'Commercial Banking',
    INVESTMENT: 'Investment Banking',
    INSURANCE: 'Insurance',
    WEALTH_MANAGEMENT: 'Wealth Management',
  };

  return (
    <Link
      to={`/models/${model.model_id}`}
      className="block bg-white rounded-lg shadow-custom hover:shadow-custom-lg transition-all duration-200 border border-primary-200 hover:border-accent/50"
    >
      {/* Header Section */}
      <div className="p-4 border-b border-primary-100">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-primary-900 truncate">
              {model.model_name}
            </h3>
            <p className="mt-1 text-sm text-primary-600 line-clamp-2">
              {model.metadata?.model_description}
            </p>
          </div>
          <Badge variant={riskVariants[model.model_risk_tier]} className="flex-shrink-0">
            <AlertTriangle className="h-3 w-3 mr-1" />
            {model.model_risk_tier}
          </Badge>
        </div>
      </div>

      {/* Metadata Grid */}
      <div className="p-4 grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center text-primary-600">
          <Box className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
          <span className="truncate">{model.deployment_type_name}</span>
        </div>

        <div className="flex items-center text-primary-600">
          <Building2 className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
          <span className="truncate">{lobLabels[model.lob_name]}</span>
        </div>

        <div className="flex items-center text-primary-600">
          <Database className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
          <span className="truncate">{model.framework_name || 'No Framework'}</span>
        </div>

        <div className="flex items-center text-primary-600">
          <Tag className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
          <span className="truncate">{model.model_jira_id || 'No JIRA ID'}</span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="px-4 py-3 bg-primary-50/50 rounded-b-lg border-t border-primary-100">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-primary-600">
            <Users className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
            <span className="truncate">{model.roles?.model_owner || 'Unassigned'}</span>
          </div>
          <div className="flex items-center text-primary-600">
            <Clock className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
            <span className="truncate">
              Updated {formatDate(model.updated_at)}
            </span>
          </div>
        </div>

        {model.model_risk_tier === 'CRITICAL' && (
          <div className="mt-2 flex items-center text-sm text-red-600">
            <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Requires Review</span>
          </div>
        )}
      </div>
    </Link>
  );
}