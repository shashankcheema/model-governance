## State Management

### Filter State Types

```tsx
// src/types/filters.ts
export interface FilterState {
  search: string;
  riskTier?: RiskTier;
  deploymentType?: DeploymentType;
  lob?: LOB;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface FilterAction {
  type: 'SET_SEARCH' | 'SET_FILTER' | 'REMOVE_FILTER' | 'CLEAR_ALL';
  payload?: any;
}
```

### Filter Context

```tsx
// src/context/FilterContext.tsx
import React, { createContext, useContext, useReducer } from 'react';
import type { FilterState, FilterAction } from '../types/filters';

const FilterContext = createContext<{
  state: FilterState;
  dispatch: React.Dispatch<FilterAction>;
} | null>(null);

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_FILTER':
      return { ...state, [action.payload.key]: action.payload.value };
    case 'REMOVE_FILTER':
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    case 'CLEAR_ALL':
      return { search: '' };
    default:
      return state;
  }
}

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(filterReducer, { search: '' });

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}
```

### Filter Hooks

```tsx
// src/hooks/useFilteredModels.ts
import { useMemo } from 'react';
import { useFilters } from '../context/FilterContext';
import { mockModels } from '../lib/mock-data';

export function useFilteredModels() {
  const { state } = useFilters();

  return useMemo(() => {
    return mockModels.filter(model => {
      // Search filter
      if (state.search) {
        const searchTerm = state.search.toLowerCase();
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

      // Risk tier filter
      if (state.riskTier && model.model_risk_tier !== state.riskTier) {
        return false;
      }

      // Deployment type filter
      if (state.deploymentType && model.deployment_type_name !== state.deploymentType) {
        return false;
      }

      // Line of business filter
      if (state.lob && model.lob_name !== state.lob) {
        return false;
      }

      // Date range filter
      if (state.dateRange) {
        const modelDate = new Date(model.updated_at);
        const start = new Date(state.dateRange.start);
        const end = new Date(state.dateRange.end);

        if (modelDate < start || modelDate > end) {
          return false;
        }
      }

      return true;
    });
  }, [state]);
}
```

### Best Practices

1. **State Structure**
   - Clear interfaces
   - Type safety
   - Immutable updates

2. **Performance**
   - Memoized filters
   - Efficient updates
   - Proper dependencies

3. **Error Handling**
   - Type checking
   - Validation
   - Error boundaries

4. **Code Organization**
   - Modular structure
   - Clear responsibilities
   - Consistent patterns