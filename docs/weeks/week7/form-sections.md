## Form Sections

### Implementation

```tsx
// src/components/form/sections/InfrastructureSection.tsx
import React from 'react';
import { InfrastructureForm } from '../../infrastructure/InfrastructureForm';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface InfrastructureSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function InfrastructureSection({
  register,
  errors
}: InfrastructureSectionProps) {
  return (
    <div className="space-y-6">
      <InfrastructureForm register={register} errors={errors} />
      
      <div className="bg-primary-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-primary-900 mb-2">
          Infrastructure Requirements
        </h4>
        <ul className="space-y-2 text-sm text-primary-600">
          <li className="flex items-start gap-2">
            <span className="h-5 w-5 flex items-center justify-center rounded-full bg-accent/10 text-accent">
              1
            </span>
            <span>Namespace must be unique within the cluster</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="h-5 w-5 flex items-center justify-center rounded-full bg-accent/10 text-accent">
              2
            </span>
            <span>VM specifications should match model requirements</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="h-5 w-5 flex items-center justify-center rounded-full bg-accent/10 text-accent">
              3
            </span>
            <span>Container image should follow versioning standards</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// src/components/form/sections/ServiceNowSection.tsx
import React from 'react';
import { ServiceNowForm } from '../../servicenow/ServiceNowForm';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface ServiceNowSectionProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function ServiceNowSection({
  register,
  errors
}: ServiceNowSectionProps) {
  return (
    <div className="space-y-6">
      <ServiceNowForm register={register} errors={errors} />
      
      <div className="bg-primary-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-primary-900 mb-2">
          ServiceNow Integration Details
        </h4>
        <ul className="space-y-2 text-sm text-primary-600">
          <li className="flex items-start gap-2">
            <span className="h-5 w-5 flex items-center justify-center rounded-full bg-accent/10 text-accent">
              1
            </span>
            <span>Assignment group must exist in ServiceNow</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="h-5 w-5 flex items-center justify-center rounded-full bg-accent/10 text-accent">
              2
            </span>
            <span>Group members will receive automatic notifications</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="h-5 w-5 flex items-center justify-center rounded-full bg-accent/10 text-accent">
              3
            </span>
            <span>Incidents will be automatically routed to the group</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
```

### Best Practices

1. **Section Organization**
   - Clear structure
   - Proper grouping
   - Consistent layout

2. **User Guidance**
   - Clear instructions
   - Helpful tips
   - Visual aids

3. **Form Integration**
   - Proper validation
   - Error handling
   - State management

4. **Visual Design**
   - Consistent styling
   - Clear hierarchy
   - Proper spacing