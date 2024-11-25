## ServiceNow Integration

### Implementation

```tsx
// src/components/servicenow/ServiceNowForm.tsx
import React from 'react';
import { FormSection } from '../form/FormSection';
import { FormField } from '../form/FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Users, Bell, AlertCircle } from 'lucide-react';

interface ServiceNowFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function ServiceNowForm({ register, errors }: ServiceNowFormProps) {
  return (
    <FormSection title="ServiceNow Configuration">
      <div className="space-y-6">
        <FormField
          label="Assignment Group"
          error={errors.assignment_group?.message}
          tooltip="Team responsible for model support"
          required
        >
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
            <input
              type="text"
              {...register('assignment_group')}
              className="pl-10 w-full rounded-md border-primary-300 focus:border-accent focus:ring-accent"
              placeholder="e.g., ML-Support-Team"
            />
          </div>
        </FormField>

        <div className="bg-primary-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-primary-900">
                ServiceNow Integration
              </h4>
              <p className="mt-1 text-sm text-primary-600">
                The assignment group will be used for automatic ticket routing and 
                notifications in ServiceNow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FormSection>
  );
}

// src/components/servicenow/ServiceNowDisplay.tsx
interface ServiceNowDisplayProps {
  assignmentGroup: string;
}

export function ServiceNowDisplay({ assignmentGroup }: ServiceNowDisplayProps) {
  return (
    <div className="bg-white rounded-lg shadow-custom p-6">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-medium text-primary-900">
          ServiceNow Integration
        </h3>
      </div>

      <dl className="grid gap-4">
        <div>
          <dt className="text-sm font-medium text-primary-500">
            Assignment Group
          </dt>
          <dd className="mt-1 text-sm text-primary-900 flex items-center gap-2">
            <Users className="h-4 w-4 text-accent" />
            {assignmentGroup}
          </dd>
        </div>
      </dl>
    </div>
  );
}
```

### Best Practices

1. **Component Design**
   - Clear structure
   - Reusable parts
   - Consistent styling

2. **Integration**
   - Clear data flow
   - Error handling
   - Status feedback

3. **User Experience**
   - Clear instructions
   - Visual feedback
   - Loading states

4. **Validation**
   - Input validation
   - Format checking
   - Error messages