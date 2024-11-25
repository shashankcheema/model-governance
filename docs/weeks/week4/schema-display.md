## Schema Display

### Implementation

```tsx
// src/components/detail/SchemaDisplay.tsx
import React from 'react';
import { Database } from 'lucide-react';
import { MetadataSection } from './MetadataSection';
import type { ModelSchema } from '../../types/model';

interface SchemaDisplayProps {
  schema: ModelSchema;
}

function TableList({ title, tables }: { title: string; tables: string[] }) {
  if (!tables || tables.length === 0) return null;
  
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-primary-900">{title}</h4>
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

export function SchemaDisplay({ schema }: SchemaDisplayProps) {
  return (
    <MetadataSection
      title="Schema Information"
      icon={<Database className="h-5 w-5" />}
    >
      <div className="space-y-6">
        <div className="flex items-center">
          <Database className="h-5 w-5 text-accent mr-2" />
          <span className="text-primary-600">{schema.model_schema_name}</span>
        </div>
        
        <TableList 
          title="Input Tables" 
          tables={schema.model_input_tables} 
        />
        
        <TableList 
          title="Output Tables" 
          tables={schema.model_output_tables} 
        />
        
        <TableList 
          title="Source Tables" 
          tables={schema.model_source_tables} 
        />
      </div>
    </MetadataSection>
  );
}
```

### Best Practices

1. **Data Organization**
   - Clear grouping
   - Visual hierarchy
   - Consistent layout

2. **Visual Elements**
   - Meaningful icons
   - Clear relationships
   - Proper spacing

3. **Component Structure**
   - Modular design
   - Reusable parts
   - Clear props

4. **Error Handling**
   - Empty states
   - Loading states
   - Error states