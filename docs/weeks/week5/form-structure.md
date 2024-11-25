## Form Structure

### Implementation

```tsx
// src/components/form/ModelForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { modelSchema } from '../../schemas/modelSchema';
import { 
  Info, 
  Code, 
  Users, 
  Database, 
  Server, 
  Bell, 
  AlertTriangle,
  Clock
} from 'lucide-react';

interface ModelFormProps {
  model?: Model;
  initialData?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

type Section = {
  id: string;
  label: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

export function ModelForm({ model, initialData, onSubmit, onCancel }: ModelFormProps) {
  const [activeSection, setActiveSection] = useState('basic');
  const formMethods = useForm({
    resolver: zodResolver(modelSchema),
    defaultValues: initialData
  });

  const sections: Section[] = [
    {
      id: 'basic',
      label: 'Basic Information',
      icon: <Info className="h-5 w-5" />,
      component: <BasicInfoSection />
    },
    // ... other sections
  ];

  return (
    <div className="flex gap-6">
      {/* Navigation */}
      <nav className="w-64 bg-white rounded-lg shadow-custom p-4 h-fit">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
                  activeSection === section.id
                    ? "bg-accent text-white"
                    : "text-primary-600 hover:bg-primary-50"
                )}
              >
                {section.icon}
                <span className="font-medium">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Form Content */}
      <div className="flex-1">
        <form 
          className="bg-white rounded-lg shadow-custom p-6"
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          {sections.find(s => s.id === activeSection)?.component}
        </form>
      </div>
    </div>
  );
}
```

### Best Practices

1. **Form Organization**
   - Clear section structure
   - Consistent navigation
   - Proper state management

2. **User Experience**
   - Section indicators
   - Clear navigation
   - Visual feedback

3. **Validation**
   - Schema-based validation
   - Real-time feedback
   - Clear error messages

4. **Performance**
   - Efficient updates
   - Proper memoization
   - Optimized rendering