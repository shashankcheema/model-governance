## User Feedback

### Implementation

```tsx
// src/components/feedback/Toast.tsx
import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  type: ToastType;
  message: string;
  onClose?: () => void;
}

export function Toast({ type, message, onClose }: ToastProps) {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertTriangle,
    info: Info
  };

  const Icon = icons[type];

  return (
    <div
      className={cn(
        'flex items-center gap-2 p-4 rounded-lg shadow-lg',
        'animate-slide-in-right',
        {
          'bg-green-50 text-green-900': type === 'success',
          'bg-red-50 text-red-900': type === 'error',
          'bg-yellow-50 text-yellow-900': type === 'warning',
          'bg-blue-50 text-blue-900': type === 'info'
        }
      )}
      role="alert"
    >
      <Icon className="h-5 w-5" />
      <p className="flex-1">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 hover:opacity-75"
          aria-label="Close notification"
        >
          <XCircle className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

// src/components/feedback/LoadingSpinner.tsx
export function LoadingSpinner() {
  return (
    <div
      className="animate-spin h-5 w-5 border-2 border-primary-200 border-t-accent rounded-full"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// src/hooks/useToast.ts
import { useState } from 'react';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: ToastType, message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, type, message }]);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return {
    toasts,
    addToast,
    removeToast
  };
}
```

### Best Practices

1. **Visual Feedback**
   - Clear indicators
   - Consistent styling
   - Appropriate timing

2. **Accessibility**
   - ARIA roles
   - Screen reader
   - Keyboard support

3. **Implementation**
   - Reusable components
   - Clean animations
   - Proper timing

4. **User Experience**
   - Clear messages
   - Non-intrusive
   - Easy dismissal