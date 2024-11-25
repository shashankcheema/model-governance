## Performance Testing

### Implementation

```tsx
// src/tests/performance/modelList.perf.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ModelList } from '../../components/ModelList';

describe('ModelList Performance', () => {
  it('renders large lists efficiently', async () => {
    const start = performance.now();
    
    render(<ModelList />);
    
    const end = performance.now();
    const renderTime = end - start;
    
    expect(renderTime).toBeLessThan(100); // 100ms threshold
  });

  it('handles filtering efficiently', async () => {
    const { rerender } = render(<ModelList />);
    
    const start = performance.now();
    
    // Update filters
    rerender(
      <ModelList
        initialFilters={{
          search: 'test',
          riskTier: 'HIGH'
        }}
      />
    );
    
    const end = performance.now();
    const filterTime = end - start;
    
    expect(filterTime).toBeLessThan(50); // 50ms threshold
  });
});

// src/tests/performance/modelForm.perf.test.tsx
describe('ModelForm Performance', () => {
  it('handles dynamic fields efficiently', async () => {
    const start = performance.now();
    
    const { rerender } = render(<ModelForm />);
    
    // Add multiple table entries
    for (let i = 0; i < 10; i++) {
      rerender(
        <ModelForm
          initialData={{
            input_tables: Array(i).fill({ value: 'test' })
          }}
        />
      );
    }
    
    const end = performance.now();
    const updateTime = end - start;
    
    expect(updateTime / 10).toBeLessThan(20); // 20ms per update
  });

  it('validates form efficiently', async () => {
    const { getByRole } = render(<ModelForm />);
    
    const start = performance.now();
    
    await userEvent.click(getByRole('button', { name: /save/i }));
    
    const end = performance.now();
    const validationTime = end - start;
    
    expect(validationTime).toBeLessThan(50); // 50ms threshold
  });
});
```

### Best Practices

1. **Performance Metrics**
   - Render times
   - Update times
   - Memory usage

2. **Test Scenarios**
   - Large datasets
   - Frequent updates
   - Complex operations

3. **Optimization**
   - Memoization
   - Lazy loading
   - Code splitting

4. **Monitoring**
   - Performance budgets
   - Regression tests
   - Benchmarks