## Infrastructure Management

### Implementation

```tsx
// src/components/infrastructure/InfrastructureForm.tsx
import React from 'react';
import { FormSection } from '../form/FormSection';
import { FormField } from '../form/FormField';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Server, Cloud, Box, Check } from 'lucide-react';

interface InfrastructureFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export function InfrastructureForm({ register, errors }: InfrastructureFormProps) {
  return (
    <FormSection title="Infrastructure Configuration">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Namespace"
          error={errors.namespace_name?.message}
          tooltip="Kubernetes namespace for deployment"
          required
        >
          <div className="relative">
            <Cloud className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
            <input
              type="text"
              {...register('namespace_name')}
              className="pl-10 w-full rounded-md border-primary-300 focus:border-accent focus:ring-accent"
              placeholder="e.g., ml-prod"
            />
          </div>
        </FormField>

        <FormField
          label="Cluster"
          error={errors.cluster_name?.message}
          tooltip="Target Kubernetes cluster"
          required
        >
          <div className="relative">
            <Server className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
            <input
              type="text"
              {...register('cluster_name')}
              className="pl-10 w-full rounded-md border-primary-300 focus:border-accent focus:ring-accent"
              placeholder="e.g., ml-cluster-01"
            />
          </div>
        </FormField>

        <FormField
          label="VM Info"
          error={errors.vm_info?.message}
          tooltip="Virtual machine specifications"
        >
          <div className="relative">
            <Box className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
            <input
              type="text"
              {...register('vm_info')}
              className="pl-10 w-full rounded-md border-primary-300 focus:border-accent focus:ring-accent"
              placeholder="e.g., m5.xlarge"
            />
          </div>
        </FormField>

        <FormField
          label="Container Image"
          error={errors.container_image_info?.message}
          tooltip="Docker image information"
        >
          <div className="relative">
            <Box className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
            <input
              type="text"
              {...register('container_image_info')}
              className="pl-10 w-full rounded-md border-primary-300 focus:border-accent focus:ring-accent"
              placeholder="e.g., model:v1.0.0"
            />
          </div>
        </FormField>

        <FormField
          label="Trident Onboarded"
          error={errors.trident_onboarded?.message}
          tooltip="Storage management status"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('trident_onboarded')}
              className="h-4 w-4 rounded border-primary-300 text-accent focus:ring-accent"
            />
            <span className="text-sm text-primary-600">
              Storage system is configured
            </span>
          </div>
        </FormField>
      </div>
    </FormSection>
  );
}
```

### Best Practices

1. **Form Organization**
   - Clear field grouping
   - Consistent layout
   - Proper validation

2. **User Experience**
   - Helpful tooltips
   - Clear labels
   - Visual feedback

3. **Validation**
   - Required fields
   - Format checking
   - Error messages

4. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Focus management