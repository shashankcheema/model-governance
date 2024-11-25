## Error Handling

### Implementation

```tsx
// src/components/form/FormError.tsx
import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormErrorProps {
  message: string;
}

export function FormError({ message }: FormErrorProps) {
  return (
    <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
      <AlertCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
}

// src/components/form/FormField.tsx
interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  tooltip?: string;
  children: React.ReactNode;
}

export function FormField({
  label,
  error,
  required,
  tooltip,
  children
}: FormFieldProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1">
        <label className="form-label">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        {tooltip && (
          <Tooltip content={tooltip} />
        )}
      </div>
      {children}
      {error && <FormError message={error} />}
    </div>
  );
}

// src/hooks/useFormError.ts
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';

export function useFormError(
  methods: UseFormReturn<any>,
  onError?: (errors: any) => void
) {
  useEffect(() => {
    const subscription = methods.watch((value, { name, type }) => {
      if (type === 'change') {
        const fieldError = methods.getFieldState(name!).error;
        if (fieldError && onError) {
          onError({ [name!]: fieldError });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [methods, onError]);
}
```

### Best Practices

1. **Error Display**
   - Clear messages
   - Visual indicators
   - Consistent styling

2. **Validation Timing**
   - Real-time validation
   - Submit validation
   - Field blur validation

3. **Error Types**
   - Field errors
   - Form errors
   - API errors

4. **User Experience**
   - Clear feedback
   - Error recovery
   - Helpful guidance