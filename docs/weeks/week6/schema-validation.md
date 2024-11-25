## Schema Validation

### Implementation

```tsx
// src/schemas/schemaValidation.ts
import { z } from 'zod';

export const tableSchema = z.object({
  value: z.string()
    .min(1, 'Table name is required')
    .max(100, 'Table name must be less than 100 characters')
    .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/, 'Invalid table name format')
});

export const schemaSchema = z.object({
  schema_name: z.string()
    .min(1, 'Schema name is required')
    .max(100, 'Schema name must be less than 100 characters')
    .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/, 'Invalid schema name format'),
  
  input_tables: z.array(tableSchema)
    .min(1, 'At least one input table is required')
    .max(10, 'Maximum 10 input tables allowed'),
  
  output_tables: z.array(tableSchema)
    .min(1, 'At least one output table is required')
    .max(10, 'Maximum 10 output tables allowed'),
  
  source_tables: z.array(tableSchema)
    .min(1, 'At least one source table is required')
    .max(10, 'Maximum 10 source tables allowed')
});

// src/hooks/useSchemaValidation.ts
import { useCallback } from 'react';
import { schemaSchema } from '../schemas/schemaValidation';

export function useSchemaValidation() {
  const validateSchema = useCallback(async (data: unknown) => {
    try {
      await schemaSchema.parseAsync(data);
      return { valid: true, errors: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          valid: false,
          errors: error.errors.reduce((acc, err) => ({
            ...acc,
            [err.path.join('.')]: err.message
          }), {})
        };
      }
      throw error;
    }
  }, []);

  return { validateSchema };
}
```

### Best Practices

1. **Schema Design**
   - Clear validation rules
   - Proper error messages
   - Type safety

2. **Validation Rules**
   - Input validation
   - Format checking
   - Size limits

3. **Error Handling**
   - Detailed messages
   - Clear feedback
   - Error mapping

4. **Performance**
   - Efficient validation
   - Proper caching
   - Optimized checks