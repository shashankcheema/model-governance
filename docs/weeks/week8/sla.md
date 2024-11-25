## SLA Management

### Implementation

```tsx
// src/components/sla/SLAForm.tsx
import React from 'react';
import { FormSection } from '../form/FormSection';
import { FormField } from '../form/FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Clock, AlertTriangle } from 'lucide-react';

interface SLAFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function SLAForm({ register, errors }: SLAFormProps) {
  return (
    <FormSection title="SLA Configuration">
      <div className="space-y-6">
        <FormField
          label="Runtime (minutes)"
          error={errors.runtime_minutes?.message}
          tooltip="Expected model runtime in minutes"
          required
        >
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
            <input
              type="number"
              {...register('runtime_minutes', { valueAsNumber: true })}
              className="pl-10 w-full rounded-md border-primary-300 focus:border-accent focus:ring-accent"
              placeholder="e.g., 30"
              min={0}
            />
          </div>
        </FormField>

        <div className="bg-primary-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-primary-900">
                SLA Requirements
              </h4>
              <p className="mt-1 text-sm text-primary-600">
                Define runtime expectations and monitoring thresholds for this model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FormSection>
  );
}

// src/components/sla/SLADisplay.tsx
interface SLADisplayProps {
  sla: {
    runtime_minutes: number;
  };
}

export function SLADisplay({ sla }: SLADisplayProps) {
  return (
    <div className="bg-white rounded-lg shadow-custom p-6">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-medium text-primary-900">
          SLA Information
        </h3>
      </div>

      <dl className="space-y-4">
        <div>
          <dt className="text-sm font-medium text-primary-500">
            Expected Runtime
          </dt>
          <dd className="mt-1 flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-sm text-primary-900">
              {sla.runtime_minutes} minutes
            </span>
          </dd>
        </div>

        <div className="bg-primary-50 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-primary-900">
                Performance Monitoring
              </h4>
              <p className="mt-1 text-sm text-primary-600">
                Runtime is monitored and alerts are triggered if exceeded.
              </p>
            </div>
          </div>
        </div>
      </dl>
    </div>
  );
}
```

### Best Practices

1. **Form Design**
   - Clear inputs
   - Proper validation
   - Helpful guidance

2. **Performance Tracking**
   - Clear metrics
   - Visual indicators
   - Status updates

3. **User Experience**
   - Intuitive controls
   - Clear feedback
   - Proper spacing

4. **Error Handling**
   - Input validation
   - Range checking
   - Error messages