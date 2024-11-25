## Search Implementation

### Real-time Search

```tsx
// src/hooks/useSearch.ts
import { useState, useCallback, useMemo } from 'react';
import { debounce } from '../lib/utils';

interface UseSearchProps<T> {
  data: T[];
  searchFields: (keyof T)[];
  delay?: number;
}

export function useSearch<T>({ data, searchFields, delay = 300 }: UseSearchProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, delay),
    []
  );

  // Memoized search results
  const searchResults = useMemo(() => {
    if (!searchTerm) return data;

    const term = searchTerm.toLowerCase();
    return data.filter(item => {
      return searchFields.some(field => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(term);
        }
        return false;
      });
    });
  }, [data, searchTerm, searchFields]);

  return {
    searchTerm,
    searchResults,
    setSearchTerm: debouncedSearch
  };
}
```

### Search Input Component

```tsx
// src/components/search/SearchInput.tsx
import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  className
}: SearchInputProps) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full pl-10 pr-4 py-2.5 border border-primary-200 rounded-lg",
          "focus:ring-2 focus:ring-accent focus:border-accent",
          "bg-white text-primary-900 placeholder-primary-400",
          className
        )}
      />
    </div>
  );
}
```

### Integration Example

```tsx
// Example usage in a component
function ModelSearch() {
  const { searchTerm, searchResults, setSearchTerm } = useSearch({
    data: mockModels,
    searchFields: ['model_name', 'model_description', 'model_jira_id'],
  });

  return (
    <div>
      <SearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search models..."
      />
      <div className="mt-4">
        {searchResults.map(model => (
          <ModelCard key={model.model_id} model={model} />
        ))}
      </div>
    </div>
  );
}
```

### Best Practices

1. **Performance**
   - Implement debouncing
   - Memoize search results
   - Optimize filter logic

2. **User Experience**
   - Provide clear feedback
   - Show loading states
   - Handle empty states

3. **Accessibility**
   - Proper ARIA labels
   - Keyboard navigation
   - Focus management

4. **Error Handling**
   - Handle invalid input
   - Provide fallbacks
   - Clear error messages