## Unit Testing

### Implementation

```tsx
// src/utils/__tests__/utils.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate, cn } from '../utils';

describe('formatDate', () => {
  it('formats valid dates correctly', () => {
    const date = '2024-03-15T00:00:00.000Z';
    expect(formatDate(date)).toBe('Mar 15, 2024');
  });

  it('handles null dates', () => {
    expect(formatDate(null)).toBe('N/A');
  });

  it('handles undefined dates', () => {
    expect(formatDate(undefined)).toBe('N/A');
  });

  it('handles invalid dates', () => {
    expect(formatDate('invalid-date')).toBe('Invalid date');
  });
});

describe('cn utility', () => {
  it('merges class names correctly', () => {
    const result = cn(
      'base-class',
      { 'conditional-class': true },
      'another-class'
    );
    expect(result).toBe('base-class conditional-class another-class');
  });

  it('handles conditional classes', () => {
    const result = cn(
      'base-class',
      { 'included': true, 'excluded': false }
    );
    expect(result).toBe('base-class included');
  });
});

// src/schemas/__tests__/modelSchema.test.ts
import { describe, it, expect } from 'vitest';
import { modelSchema } from '../modelSchema';

describe('modelSchema', () => {
  it('validates valid model data', () => {
    const validData = {
      name: 'Test Model',
      riskTier: 'HIGH',
      deploymentType: 'PRODUCTION',
      lob: 'RETAIL',
      owner: 'John Doe'
    };

    const result = modelSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects invalid model data', () => {
    const invalidData = {
      name: '', // Empty name
      riskTier: 'INVALID', // Invalid risk tier
      deploymentType: 'PRODUCTION',
      lob: 'RETAIL'
    };

    const result = modelSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
```

### Best Practices

1. **Test Organization**
   - Clear test groups
   - Descriptive names
   - Focused test cases

2. **Test Coverage**
   - Edge cases
   - Error conditions
   - Common scenarios

3. **Test Quality**
   - Single responsibility
   - Clear assertions
   - Meaningful descriptions

4. **Test Maintenance**
   - DRY principles
   - Reusable setup
   - Clear documentation