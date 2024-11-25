import React from 'react';
import { Button } from '../ui/button';

interface FormActionsProps {
  onCancel: () => void;
  isSubmitting: boolean;
}

export function FormActions({ onCancel, isSubmitting }: FormActionsProps) {
  return (
    <div className="flex justify-end gap-3">
      <Button
        type="button"
        variant="secondary"
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Saving...' : 'Save Changes'}
      </Button>
    </div>
  );
}