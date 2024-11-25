import React from 'react';
import { FormSection } from '../FormSection';
import { FormField } from '../FormField';
import { UseFormRegister, FieldErrors, useFieldArray, Control } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

interface SchemaSectionProps {
  register: UseFormRegister<any>;
  control: Control<any>;
  errors: FieldErrors<any>;
}

export function SchemaSection({ register, control, errors }: SchemaSectionProps) {
  const { fields: inputFields, append: appendInput, remove: removeInput } = useFieldArray({
    control,
    name: "input_tables"
  });

  const { fields: outputFields, append: appendOutput, remove: removeOutput } = useFieldArray({
    control,
    name: "output_tables"
  });

  const { fields: sourceFields, append: appendSource, remove: removeSource } = useFieldArray({
    control,
    name: "source_tables"
  });

  return (
    <FormSection title="Schema Information">
      <div className="col-span-2">
        <FormField label="Schema Name" error={errors.schema_name?.message}>
          <input
            type="text"
            {...register('schema_name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </FormField>
      </div>

      <div className="col-span-2 space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">Input Tables</label>
            <button
              type="button"
              onClick={() => appendInput({ value: '' })}
              className="inline-flex items-center px-2 py-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Table
            </button>
          </div>
          {inputFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input
                {...register(`input_tables.${index}.value`)}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter table name"
              />
              <button
                type="button"
                onClick={() => removeInput(index)}
                className="p-2 text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">Output Tables</label>
            <button
              type="button"
              onClick={() => appendOutput({ value: '' })}
              className="inline-flex items-center px-2 py-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Table
            </button>
          </div>
          {outputFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input
                {...register(`output_tables.${index}.value`)}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter table name"
              />
              <button
                type="button"
                onClick={() => removeOutput(index)}
                className="p-2 text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">Source Tables</label>
            <button
              type="button"
              onClick={() => appendSource({ value: '' })}
              className="inline-flex items-center px-2 py-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Table
            </button>
          </div>
          {sourceFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input
                {...register(`source_tables.${index}.value`)}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter table name"
              />
              <button
                type="button"
                onClick={() => removeSource(index)}
                className="p-2 text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </FormSection>
  );
}