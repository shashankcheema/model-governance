## Dynamic Arrays

### Implementation

```tsx
// src/hooks/useDynamicArray.ts
import { useFieldArray, Control } from 'react-hook-form';

interface UseDynamicArrayProps {
  name: string;
  control: Control<any>;
  defaultValue?: string;
}

export function useDynamicArray({ name, control, defaultValue = '' }: UseDynamicArrayProps) {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name
  });

  const addItem = () => append({ value: defaultValue });
  const removeItem = (index: number) => remove(index);
  const moveItem = (from: number, to: number) => move(from, to);

  return {
    fields,
    addItem,
    removeItem,
    moveItem
  };
}

// src/components/form/DynamicArray.tsx
import React from 'react';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';

interface DynamicArrayProps {
  label: string;
  fields: any[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onMove: (from: number, to: number) => void;
  register: any;
  name: string;
  errors?: any;
}

export function DynamicArray({
  label,
  fields,
  onAdd,
  onRemove,
  onMove,
  register,
  name,
  errors
}: DynamicArrayProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-primary-700">{label}</label>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center px-2 py-1 text-sm text-accent hover:text-accent-dark"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Item
        </button>
      </div>

      <div className="space-y-2">
        {fields.map((field, index) => (
          <DynamicArrayItem
            key={field.id}
            index={index}
            register={register}
            name={`${name}.${index}.value`}
            onRemove={() => onRemove(index)}
            error={errors?.[index]?.value?.message}
          />
        ))}
      </div>
    </div>
  );
}

function DynamicArrayItem({
  index,
  register,
  name,
  onRemove,
  error
}: {
  index: number;
  register: any;
  name: string;
  onRemove: () => void;
  error?: string;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: name });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-2"
    >
      <button
        type="button"
        className="p-1 text-primary-400 cursor-move"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="h-4 w-4" />
      </button>

      <input
        {...register(name)}
        className={cn(
          "flex-1 rounded-md border-primary-300 shadow-sm",
          "focus:border-accent focus:ring-accent",
          error && "border-red-300 focus:border-red-500 focus:ring-red-500"
        )}
      />

      <button
        type="button"
        onClick={onRemove}
        className="p-1 text-primary-400 hover:text-red-500"
      >
        <Trash2 className="h-4 w-4" />
      </button>

      {error && (
        <span className="text-sm text-red-600">{error}</span>
      )}
    </div>
  );
}
```

### Best Practices

1. **State Management**
   - Use React Hook Form's field array
   - Handle array operations efficiently
   - Maintain proper validation

2. **User Experience**
   - Drag and drop support
   - Clear add/remove actions
   - Visual feedback

3. **Performance**
   - Optimize re-renders
   - Handle large arrays
   - Efficient updates

4. **Error Handling**
   - Field-level validation
   - Array-level validation
   - Clear error messages