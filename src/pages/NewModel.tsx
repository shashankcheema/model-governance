import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ModelForm } from '../components/ModelForm';
import type { ModelFormData } from '../types/model';

export function NewModel() {
  const navigate = useNavigate();

  const handleSubmit = (data: ModelFormData) => {
    console.log('New model data:', data);
    // In a real app, this would make an API call
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="inline-flex items-center text-sm text-discover-gray-500 hover:text-discover-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Models
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-discover-gray-900">
            Create New Model
          </h1>
        </div>
      </div>

      <ModelForm 
        onSubmit={handleSubmit} 
        onCancel={() => navigate('/')} 
      />
    </div>
  );
}