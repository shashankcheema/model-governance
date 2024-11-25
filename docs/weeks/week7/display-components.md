## Display Components

### Implementation

```tsx
// src/components/display/InfrastructureDisplay.tsx
import React from 'react';
import { Server, Cloud, Box, Check } from 'lucide-react';
import type { ModelInfra } from '../../types/model';

interface InfrastructureDisplayProps {
  infra: ModelInfra;
}

export function InfrastructureDisplay({ infra }: InfrastructureDisplayProps) {
  return (
    <div className="bg-white rounded-lg shadow-custom p-6">
      <div className="flex items-center gap-2 mb-6">
        <Server className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-medium text-primary-900">
          Infrastructure Details
        </h3>
      </div>

      <dl className="grid grid-cols-2 gap-6">
        <div>
          <dt className="text-sm font-medium text-primary-500 mb-1">
            Namespace
          </dt>
          <dd className="flex items-center gap-2 text-primary-900">
            <Cloud className="h-4 w-4 text-accent" />
            {infra.namespace_name}
          </dd>
        </div>

        <div>
          <dt className="text-sm font-medium text-primary-500 mb-1">
            Cluster
          </dt>
          <dd className="flex items-center gap-2 text-primary-900">
            <Server className="h-4 w-4 text-accent" />
            {infra.cluster_name}
          </dd>
        </div>

        <div>
          <dt className="text-sm font-medium text-primary-500 mb-1">
            VM Info
          </dt>
          <dd className="flex items-center gap-2 text-primary-900">
            <Box className="h-4 w-4 text-accent" />
            {infra.vm_info}
          </dd>
        </div>

        <div>
          <dt className="text-sm font-medium text-primary-500 mb-1">
            Container Image
          </dt>
          <dd className="flex items-center gap-2 text-primary-900">
            <Box className="h-4 w-4 text-accent" />
            {infra.container_image_info}
          </dd>
        </div>

        <div className="col-span-2">
          <dt className="text-sm font-medium text-primary-500 mb-1">
            Trident Status
          </dt>
          <dd className="flex items-center gap-2">
            <span className={`flex items-center gap-1 ${
              infra.trident_onboarded ? 'text-green-600' : 'text-red-600'
            }`}>
              <Check className="h-4 w-4" />
              {infra.trident_onboarded ? 'Onboarded' : 'Not Onboarded'}
            </span>
          </dd>
        </div>
      </dl>
    </div>
  );
}

// src/components/display/ServiceNowDisplay.tsx
import React from 'react';
import { Bell, Users, AlertCircle } from 'lucide-react';
import type { ServiceNow } from '../../types/model';

interface ServiceNowDisplayProps {
  serviceNow: ServiceNow;
}

export function ServiceNowDisplay({ serviceNow }: ServiceNowDisplayProps) {
  return (
    <div className="bg-white rounded-lg shadow-custom p-6">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-medium text-primary-900">
          ServiceNow Integration
        </h3>
      </div>

      <dl className="space-y-4">
        <div>
          <dt className="text-sm font-medium text-primary-500 mb-1">
            Assignment Group
          </dt>
          <dd className="flex items-center gap-2 text-primary-900">
            <Users className="h-4 w-4 text-accent" />
            {serviceNow.assignment_group}
          </dd>
        </div>

        <div className="bg-primary-50 rounded-lg p-4 mt-4">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-primary-900">
                Integration Status
              </h4>
              <p className="mt-1 text-sm text-primary-600">
                Automatic ticket routing and notifications are enabled for this
                assignment group.
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

1. **Visual Design**
   - Clear layout
   - Consistent styling
   - Proper spacing

2. **Data Display**
   - Organized information
   - Clear labels
   - Visual hierarchy

3. **Component Structure**
   - Reusable parts
   - Clear props
   - Type safety

4. **Accessibility**
   - Semantic markup
   - ARIA labels
   - Color contrast