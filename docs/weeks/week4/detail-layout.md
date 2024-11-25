## Detail Page Layout

### Implementation

```tsx
// src/components/detail/DetailLayout.tsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DetailLayoutProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  backLink: string;
  backLabel?: string;
}

export function DetailLayout({
  title,
  subtitle,
  actions,
  children,
  backLink,
  backLabel = 'Back'
}: DetailLayoutProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow-custom rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <Link
            to={backLink}
            className="inline-flex items-center text-sm text-primary-500 hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            {backLabel}
          </Link>
          {actions}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-primary-900">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-primary-600">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  );
}
```

### Best Practices

1. **Component Structure**
   - Clear props interface
   - Flexible layout options
   - Consistent spacing

2. **Responsive Design**
   - Mobile-first approach
   - Grid system usage
   - Proper breakpoints

3. **Navigation**
   - Clear back button
   - Consistent linking
   - Proper routing

4. **Accessibility**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation