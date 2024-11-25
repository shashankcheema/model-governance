import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { modelSchema } from '../schemas/modelSchema';
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
import { Button } from './ui/button';
import { BasicInfoSection } from './form/sections/BasicInfoSection';
import { TechnicalDetailsSection } from './form/sections/TechnicalDetailsSection';
import { TeamSection } from './form/sections/TeamSection';
import { SchemaSection } from './form/sections/SchemaSection';
import { InfrastructureSection } from './form/sections/InfrastructureSection';
import { ServiceNowSection } from './form/sections/ServiceNowSection';
import { AnomaloSection } from './form/sections/AnomaloSection';
import { SLASection } from './form/sections/SLASection';
import type { Model } from '../types/model';

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

  const { register, control, handleSubmit, formState: { errors, isSubmitting } } = formMethods;

  const sections: Section[] = [
    {
      id: 'basic',
      label: 'Basic Information',
      icon: <Info className="h-5 w-5" />,
      component: <BasicInfoSection register={register} errors={errors} />
    },
    {
      id: 'technical',
      label: 'Technical Details',
      icon: <Code className="h-5 w-5" />,
      component: <TechnicalDetailsSection register={register} errors={errors} />
    },
    {
      id: 'team',
      label: 'Team',
      icon: <Users className="h-5 w-5" />,
      component: <TeamSection register={register} errors={errors} />
    },
    {
      id: 'schema',
      label: 'Schema',
      icon: <Database className="h-5 w-5" />,
      component: <SchemaSection register={register} control={control} errors={errors} />
    },
    {
      id: 'infrastructure',
      label: 'Infrastructure',
      icon: <Server className="h-5 w-5" />,
      component: <InfrastructureSection register={register} errors={errors} />
    },
    {
      id: 'servicenow',
      label: 'ServiceNow',
      icon: <Bell className="h-5 w-5" />,
      component: <ServiceNowSection register={register} errors={errors} />
    },
    {
      id: 'anomalo',
      label: 'Anomalo',
      icon: <AlertTriangle className="h-5 w-5" />,
      component: <AnomaloSection register={register} errors={errors} />
    },
    {
      id: 'sla',
      label: 'SLA',
      icon: <Clock className="h-5 w-5" />,
      component: <SLASection register={register} errors={errors} />
    }
  ];

  return (
    <div className="flex gap-6">
      {/* Navigation Sidebar */}
      <nav className="w-64 bg-white rounded-lg shadow-custom p-4 h-fit">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === section.id
                    ? 'bg-accent text-white'
                    : 'text-primary-600 hover:bg-primary-50'
                }`}
              >
                {section.icon}
                <span className="font-medium">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Form Actions */}
        <div className="mt-6 flex gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="flex-1"
            onClick={handleSubmit(onSubmit)}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </nav>

      {/* Form Content */}
      <div className="flex-1">
        <form className="bg-white rounded-lg shadow-custom p-6">
          {sections.find(s => s.id === activeSection)?.component}
        </form>
      </div>
    </div>
  );
}