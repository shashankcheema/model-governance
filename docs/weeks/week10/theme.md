## Theme Customization

### Implementation

```tsx
// src/components/theme/ThemeProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../lib/utils';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={cn('min-h-screen transition-colors', {
        'dark': theme === 'dark'
      })}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// src/components/theme/ThemeToggle.tsx
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-full hover:bg-primary-100 dark:hover:bg-primary-800"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
```

### Tailwind Dark Mode

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          50: 'var(--primary-50)',
          // ... other shades
        },
        accent: {
          DEFAULT: '#FF5722',
          light: 'var(--accent-light)',
          // ... other shades
        }
      }
    }
  }
}

// src/styles/theme.css
:root {
  --primary-50: #F9FAFB;
  --primary-100: #F3F4F6;
  /* ... other light theme variables */
}

.dark {
  --primary-50: #18181B;
  --primary-100: #27272A;
  /* ... other dark theme variables */
}
```

### Best Practices

1. **Theme Structure**
   - CSS variables
   - Consistent naming
   - Clear organization

2. **Color Management**
   - Accessible contrast
   - Consistent palette
   - Theme variants

3. **Implementation**
   - Smooth transitions
   - Persistent settings
   - Clear indicators

4. **Accessibility**
   - Color contrast
   - Focus visibility
   - Clear indicators