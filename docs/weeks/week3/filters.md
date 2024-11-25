## Filter Components

### Filter Implementation

```tsx
// src/components/filters/FilterGroup.tsx
import React from 'react';
import { Filter as FilterIcon } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface FilterGroupProps {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}

export function FilterGroup({
  label,
  options,
  value,
  onChange,
  icon
}: FilterGroupProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400">
          {icon}
        </div>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full pr-4 py-2.5 border border-primary-200 rounded-lg",
          "focus:ring-2 focus:ring-accent focus:border-accent",
          "bg-white text-primary-900 appearance-none cursor-pointer",
          icon ? "pl-10" : "pl-4"
        )}
      >
        <option value="">{`All ${label}`}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <FilterIcon className="h-4 w-4 text-primary-400" />
      </div>
    </div>
  );
}
```

### Active Filters Display

```tsx
// src/components/filters/ActiveFilters.tsx
import React from 'react';
import { X } from 'lucide-react';

interface FilterBadge {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface ActiveFiltersProps {
  filters: FilterBadge[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export function ActiveFilters({
  filters,
  onRemove,
  onClearAll
}: ActiveFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(filter => (
        <span
          key={filter.id}
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
        >
          {filter.icon}
          <span className="mx-1">{filter.label}</span>
          <button
            onClick={() => onRemove(filter.id)}
            className="ml-1 hover:text-accent-dark"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
      <button
        onClick={onClearAll}
        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-primary-600 hover:text-primary-800 hover:bg-primary-50"
      >
        Clear All
      </button>
    </div>
  );
}
```

### Filter State Management

```tsx
// src/hooks/useFilters.ts
import { useState, useCallback } from 'react';

interface UseFiltersProps<T> {
  initialFilters?: Partial<T>;
}

export function useFilters<T extends object>({ initialFilters = {} }: UseFiltersProps<T>) {
  const [filters, setFilters] = useState<Partial<T>>(initialFilters);

  const updateFilter = useCallback((key: keyof T, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const removeFilter = useCallback((key: keyof T) => {
    setFilters(prev => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  return {
    filters,
    updateFilter,
    removeFilter,
    clearFilters
  };
}
```

### Best Practices

1. **Component Design**
   - Reusable components
   - Clear interfaces
   - Consistent styling

2. **State Management**
   - Centralized state
   - Clear updates
   - Type safety

3. **Performance**
   - Memoized callbacks
   - Efficient updates
   - Proper dependencies

4. **User Experience**
   - Clear feedback
   - Intuitive controls
   - Visual hierarchy