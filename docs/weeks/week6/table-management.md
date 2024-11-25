## Table Management

### Implementation

```tsx
// src/components/schema/TableManager.tsx
import React from 'react';
import { DynamicArray } from '../form/DynamicArray';
import { Database } from 'lucide-react';

interface TableManagerProps {
  control: Control<any>;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function TableManager({ control, register, errors }: TableManagerProps) {
  const inputTables = useDynamicArray({
    name: 'input_tables',
    control
  });

  const outputTables = useDynamicArray({
    name: 'output_tables',
    control
  });

  const sourceTables = useDynamicArray({
    name: 'source_tables',
    control
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-primary-900">
        <Database className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-medium">Table Management</h3>
      </div>

      <div className="space-y-8">
        <DynamicArray
          label="Input Tables"
          fields={inputTables.fields}
          onAdd={inputTables.addItem}
          onRemove={inputTables.removeItem}
          onMove={inputTables.moveItem}
          register={register}
          name="input_tables"
          errors={errors.input_tables}
        />

        <DynamicArray
          label="Output Tables"
          fields={outputTables.fields}
          onAdd={outputTables.addItem}
          onRemove={outputTables.removeItem}
          onMove={outputTables.moveItem}
          register={register}
          name="output_tables"
          errors={errors.output_tables}
        />

        <DynamicArray
          label="Source Tables"
          fields={sourceTables.fields}
          onAdd={sourceTables.addItem}
          onRemove={sourceTables.removeItem}
          onMove={sourceTables.moveItem}
          register={register}
          name="source_tables"
          errors={errors.source_tables}
        />
      </div>
    </div>
  );
}
```

### Best Practices

1. **Component Organization**
   - Clear responsibilities
   - Reusable components
   - Proper prop types

2. **Form Integration**
   - React Hook Form integration
   - Proper validation
   - Error handling

3. **User Interface**
   - Clear labeling
   - Intuitive controls
   - Visual feedback

4. **Performance**
   - Efficient updates
   - Proper memoization
   - Optimized rendering