## Display Components

### Implementation

```tsx
// src/components/display/MonitoringDisplay.tsx
import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import type { Anomalo, SLA } from '../../types/model';

interface MonitoringDisplayProps {
  anomalo: Anomalo;
  sla: SLA;
}

export function MonitoringDisplay({ anomalo, sla }: MonitoringDisplayProps) {
  return (
    <div className="bg-white rounded-lg shadow-custom p-6">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-medium text-primary-900">
          Monitoring & Performance
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Anomalo Status */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-primary-900">
            Data Quality Monitoring
          </h4>
          
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-full ${
              anomalo.anomalo_status === 'ACTIVE'
                ? 'bg-green-100'
                : 'bg-red-100'
            }`}>
              {anomalo.anomalo_status === 'ACTIVE' ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-600" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-primary-900">
                {anomalo.anomalo_status}
              </p>
              <p className="text-sm text-primary-600">
                {anomalo.dq_checks_info}
              </p>
            </div>
          </div>
        </div>

        {/* SLA Status */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-primary-900">
            Performance SLA
          </h4>
          
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-primary-100">
              <Clock className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-900">
                Runtime Target
              </p>
              <p className="text-sm text-primary-600">
                {sla.runtime_minutes} minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Monitoring Info */}
      <div className="mt-6 bg-primary-50 rounded-lg p-4">
        <div className="flex gap-3">
          <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-primary-900">
              Monitoring Status
            </h4>
            <p className="mt-1 text-sm text-primary-600">
              Data quality checks and performance monitoring are active.
              Alerts will be triggered for any violations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Best Practices

1. **Visual Design**
   - Clear layout
   - Status indicators
   - Proper spacing

2. **Data Display**
   - Organized information
   - Clear metrics
   - Visual hierarchy

3. **Component Structure**
   - Reusable parts
   - Clear props
   - Type safety

4. **Accessibility**
   - Semantic markup
   - ARIA labels
   - Color contrast