## Utility Functions

### 1. Class Name Utilities

```tsx
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with proper precedence
 * @param inputs - Class names to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 2. Date Formatting

```tsx
// src/lib/utils.ts
/**
 * Formats a date string into a human-readable format
 * @param date - ISO date string or null/undefined
 * @returns Formatted date string or 'N/A' if invalid
 */
export function formatDate(date: string | null | undefined) {
  if (!date) return 'N/A';
  try {
    return new Date(date).toLocaleDateString();
  } catch (error) {
    return 'Invalid date';
  }
}
```

### 3. Type Guards

```tsx
// src/lib/utils.ts
/**
 * Type guard for checking if a value is a non-null object
 * @param value - Value to check
 * @returns Boolean indicating if value is a non-null object
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

/**
 * Type guard for checking if a value is a non-empty string
 * @param value - Value to check
 * @returns Boolean indicating if value is a non-empty string
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}
```