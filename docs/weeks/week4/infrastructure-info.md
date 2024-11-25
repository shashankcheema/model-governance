## Infrastructure Info

### Implementation

```tsx
// src/components/detail/InfrastructureInfo.tsx
import React from 'react';
import { Server, Cloud, Box, Check } from 'lucide-react';
import { MetadataSection } from './MetadataSection';
import { MetadataGrid } from './MetadataGrid';
import { MetadataField } from './MetadataField';
import type { ModelInfra } from '../../types/model';

interface InfrastructureInfoProps {
  infra: ModelInfra;
}

export function InfrastructureInfo({ infra }: InfrastructureInfoProps) {
  return (
    <MetadataSection
      title="Infrastructure Information"
      icon={<Server className="h-5 w-5" />}
    >
      <MetadataGrid>
        <MetadataField
          label="Namespace"
          value={infra.namespace_name}
          icon={<Cloud className="h-4 w-4" />}
        />
        
        <MetadataField
          label="Cluster"
          value={infra.cluster_name}
          icon={<Server className="h-4 w-4" />}
        />
        
        <MetadataField
          label="VM Info"
          value={infra.vm_info}
          icon={<Box className="h-4 w-4" />}
        />
        
        <MetadataField
          label="Container Image"
          value={infra.container_image_info}
          icon={<Box className="h-4 w-4" />}
        />
        
        <div className="col-span-2">
          <MetadataField
            label="Trident Onboarded"
            value={
              <span className={`inline-flex items-center ${
                infra.trident_onboarded ? 'text-green-600' : 'text-red-600'
              }`}>
                {infra.trident_onboarded ? (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Yes
                  </>
                ) : (
                  'No'
                )}
              </span>
            }
            icon={<Check className="h-4 w-4" />}
          />
        </div>
      </MetadataGrid>
    </MetadataSection>
  );
}
```

### Best Practices

1. **Data Display**
   - Clear organization
   - Visual indicators
   - Status feedback

2. **Component Structure**
   - Reusable components
   - Consistent patterns
   - Clear interfaces

3. **Visual Design**
   - Meaningful icons
   - Status colors
   - Proper spacing

4. **Accessibility**
   - Color meaning
   - Screen readers
   - Keyboard support