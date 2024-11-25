## Metadata Sections

### Implementation

```tsx
// src/components/detail/MetadataSection.tsx
import React from 'react';
import { cn } from '../../lib/utils';

interface MetadataSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function MetadataSection({
  title,
  icon,
  children,
  className
}: MetadataSectionProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-custom p-6 space-y-4",
      className
    )}>
      <div className="flex items-center gap-2">
        {icon && (
          <div className="text-accent">
            {icon}
          </div>
        )}
        <h2 className="text-lg font-semibold text-primary-900">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}

// src/components/detail/MetadataField.tsx
interface MetadataFieldProps {
  label: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
}

export function MetadataField({
  label,
  value,
  icon
}: MetadataFieldProps) {
  return (
    <div className="flex items-start gap-2">
      {icon && (
        <div className="mt-0.5 text-accent">
          {icon}
        </div>
      )}
      <div>
        <dt className="text-sm font-medium text-primary-500">{label}</dt>
        <dd className="mt-1 text-sm text-primary-900">{value}</dd>
      </div>
    </div>
  );
}

// src/components/detail/MetadataGrid.tsx
interface MetadataGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
}

export function MetadataGrid({
  children,
  columns = 2
}: MetadataGridProps) {
  return (
    <dl className={cn(
      "grid gap-4",
      {
        "grid-cols-1": columns === 1,
        "grid-cols-2": columns === 2,
        "grid-cols-3": columns === 3,
      }
    )}>
      {children}
    </dl>
  );
}
```

### Usage Example

```tsx
function ModelMetadata({ model }: { model: Model }) {
  return (
    <MetadataSection
      title="Basic Information"
      icon={<Info className="h-5 w-5" />}
    >
      <MetadataGrid>
        <MetadataField
          label="Model Name"
          value={model.model_name}
          icon={<Tag className="h-4 w-4" />}
        />
        <MetadataField
          label="Risk Tier"
          value={model.model_risk_tier}
          icon={<AlertTriangle className="h-4 w-4" />}
        />
        <MetadataField
          label="Deployment Type"
          value={model.deployment_type_name}
          icon={<Box className="h-4 w-4" />}
        />
        <MetadataField
          label="Line of Business"
          value={model.lob_name}
          icon={<Building2 className="h-4 w-4" />}
        />
      </MetadataGrid>
    </MetadataSection>
  );
}
```

### Best Practices

1. **Component Design**
   - Reusable patterns
   - Consistent styling
   - Clear structure

2. **Data Display**
   - Clear labeling
   - Proper spacing
   - Visual hierarchy

3. **Flexibility**
   - Configurable layouts
   - Optional icons
   - Custom styling

4. **Accessibility**
   - Semantic markup
   - Color contrast
   - Screen reader support