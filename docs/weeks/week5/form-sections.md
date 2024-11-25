## Form Sections

### Implementation

```tsx
// src/components/form/sections/BasicInfoSection.tsx
import React from 'react';
import { FormSection } from '../FormSection';
import { FormField } from '../FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface BasicInfoSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function BasicInfoSection({ register, errors }: BasicInfoSectionProps) {
  return (
    <FormSection title="Basic Information">
      <FormField 
        label="Model Name" 
        error={errors.name?.message}
        tooltip="Unique identifier for the model"
      >
        <input
          type="text"
          {...register('name')}
          className="form-input"
        />
      </FormField>

      <FormField 
        label="Risk Tier" 
        error={errors.riskTier?.message}
        tooltip="Assessment of model risk level"
      >
        <select
          {...register('riskTier')}
          className="form-select"
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
          <option value="CRITICAL">Critical</option>
        </select>
      </FormField>

      {/* Additional fields */}
    </FormSection>
  );
}

// src/components/form/sections/SchemaSection.tsx
export function SchemaSection({ register, control, errors }: SchemaSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "input_tables"
  });

  return (
    <FormSection title="Schema Information">
      <FormField 
        label="Schema Name" 
        error={errors.schema_name?.message}
      >
        <input
          type="text"
          {...register('schema_name')}
          className="form-input"
        />
      </FormField>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center">
            <label className="form-label">Input Tables</label>
            <button
              type="button"
              onClick={() => append({ value: '' })}
              className="btn-secondary btn-sm"
            >
              Add Table
            </button>
          </div>
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <input
                {...register(`input_tables.${index}.value`)}
                className="form-input"
                placeholder="Enter table name"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="btn-icon"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </FormSection>
  );
}
```

### Best Practices

1. **Component Structure**
   - Clear responsibilities
   - Proper prop types
   - Consistent patterns

2. **Form Controls**
   - Proper validation
   - Clear feedback
   - Consistent styling

3. **User Experience**
   - Clear labels
   - Helpful tooltips
   - Visual feedback

4. **Error Handling**
   - Field validation
   - Error messages
   - Visual indicators