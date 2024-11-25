## Animations

### Implementation

```tsx
// src/components/animations/FadeIn.tsx
import React from 'react';
import { cn } from '../../lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <div
      className={cn(
        'animate-fade-in opacity-0',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// src/components/animations/SlideIn.tsx
interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  className
}: SlideInProps) {
  const directionClasses = {
    left: 'animate-slide-in-left',
    right: 'animate-slide-in-right',
    up: 'animate-slide-in-up',
    down: 'animate-slide-in-down'
  };

  return (
    <div
      className={cn(
        'opacity-0',
        directionClasses[direction],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
```

### Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(1rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-in-down': {
          '0%': { transform: 'translateY(-1rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-1rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(1rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.3s ease-out forwards',
        'slide-in-down': 'slide-in-down 0.3s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.3s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards'
      }
    }
  }
}
```

### Best Practices

1. **Performance**
   - Use CSS transforms
   - Hardware acceleration
   - Proper timing

2. **User Experience**
   - Smooth transitions
   - Appropriate timing
   - Reduced motion

3. **Implementation**
   - Reusable components
   - Configurable options
   - Clean animations

4. **Accessibility**
   - Motion preferences
   - Reduced animations
   - Clear purpose