## Schema Display

### Implementation

```tsx
// src/components/schema/SchemaDisplay.tsx
import React from 'react';
import { Database, ArrowRight, ArrowLeft } from 'lucide-react';
import type { ModelSchema } from '../../types/model';

interface SchemaDisplayProps {
  schema: ModelSchema;
}

function TableList({ title, tables }: { title: string; tables: string[] }) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-primary-900">{title}</h4>
      <ul className="space-y-1">
        {tables.map((table, index) => (
          <li
            key={index}
            className="flex items-center px-3 py-2 bg-primary-50 rounded-md"
          >
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
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Database className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-medium text-primary-900">
          Schema: {schema.model_schema_name}
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <TableList
            title="Source Tables"
            tables={schema.model_source_tables}
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <ArrowRight className="h-6 w-6 text-accent" />
            <span className="text-sm text-primary-500">Data Flow</span>
            <ArrowRight className="h-6 w-6 text-accent" />
          </div>
        </div>

        <div className="space-y-6">
          <TableList
            title="Input Tables"
            tables={schema.model_input_tables}
          />
          <div className="flex justify-center">
            <ArrowRight className="h-6 w-6 text-accent rotate-90" />
          </div>
          <TableList
            title="Output Tables"
            tables={schema.model_output_tables}
          />
        </div>
      </div>
    </div>
  );
}
```

### Best Practices

1. **Visual Design**
   - Clear data flow
   - Consistent styling
   - Intuitive layout

2. **Component Structure**
   - Reusable components
   - Clear organization
   - Proper types

3. **User Experience**
   - Clear relationships
   - Visual hierarchy
   - Proper spacing

4. **Accessibility**
   - Semantic markup
   - ARIA labels
   - Keyboard support