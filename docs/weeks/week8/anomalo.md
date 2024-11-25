## Anomalo Integration

### Implementation

```tsx
// src/components/anomalo/AnomaloForm.tsx
import React from 'react';
import { FormSection } from '../form/FormSection';
import { FormField } from '../form/FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface AnomaloFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function AnomaloForm({ register, errors }: AnomaloFormProps) {
  return (
    <FormSection title="Anomalo Configuration">
      <div className="space-y-6">
        <FormField
          label="Status"
          error={errors.anomalo_status?.message}
          tooltip="Current monitoring status"
          required
        >
          <select
            {...register('anomalo_status')}
            className="w-full rounded-md border-primary-300 focus:border-accent focus:ring-accent"
          >
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
            <option value="PENDING">Pending</option>
          </select>
        </FormField>

        <FormField
          label="DQ Checks"
          error={errors.dq_checks_info?.message}
          tooltip="Data quality check configuration"
        >
          <textarea
            {...register('dq_checks_info')}
            rows={4}
            className="w-full rounded-md border-primary-300 focus:border-accent focus:ring-accent"
            placeholder="Describe data quality checks..."
          />
        </FormField>

        <div className="bg-primary-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-primary-900">
                Monitoring Configuration
              </h4>
              <p className="mt-1 text-sm text-primary-600">
                Configure data quality monitoring and alerts for this model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FormSection>
  );
}

// src/components/anomalo/AnomaloDisplay.tsx
interface AnomaloDisplayProps {
  anomalo: {
    anomalo_status: string;
    dq_checks_info: string;
  };
}

export function AnomaloDisplay({ anomalo }: AnomaloDisplayProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'INACTIVE':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-custom p-6">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-medium text-primary-900">
          Anomalo Monitoring
        </h3>
      </div>

      <dl className="space-y-4">
        <div>
          <dt className="text-sm font-medium text-primary-500">Status</dt>
          <dd className="mt-1 flex items-center gap-2">
            {getStatusIcon(anomalo.anomalo_status)}
            <span className="text-sm text-primary-900">
              {anomalo.anomalo_status}
            </span>
          </dd>
        </div>

        <div>
          <dt className="text-sm font-medium text-primary-500">DQ Checks</dt>
          <dd className="mt-1 text-sm text-primary-600 whitespace-pre-wrap">
            {anomalo.dq_checks_info}
          </dd>
        </div>
      </dl>
    </div>
  );
}
```

### Best Practices

1. **Form Design**
   - Clear structure
   - Proper validation
   - Helpful tooltips

2. **Status Display**
   - Visual indicators
   - Clear states
   - Proper feedback

3. **User Experience**
   - Intuitive controls
   - Clear feedback
   - Proper spacing

4. **Error Handling**
   - Validation rules
   - Error messages
   - Status updates