## Component Testing

### Implementation

```tsx
// src/components/__tests__/ModelCard.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ModelCard } from '../ModelCard';
import { mockModels } from '../../lib/mock-data';

describe('ModelCard', () => {
  const model = mockModels[0];

  it('renders model information correctly', () => {
    render(<ModelCard model={model} />);

    expect(screen.getByText(model.model_name)).toBeInTheDocument();
    expect(screen.getByText(model.model_risk_tier)).toBeInTheDocument();
    expect(screen.getByText(model.deployment_type_name)).toBeInTheDocument();
  });

  it('shows critical warning for critical risk models', () => {
    const criticalModel = {
      ...model,
      model_risk_tier: 'CRITICAL'
    };

    render(<ModelCard model={criticalModel} />);
    expect(screen.getByText(/requires review/i)).toBeInTheDocument();
  });

  it('formats dates correctly', () => {
    render(<ModelCard model={model} />);
    expect(screen.getByText(/updated/i)).toBeInTheDocument();
  });
});

// src/components/__tests__/SearchFilters.test.tsx
describe('SearchFilters', () => {
  const mockOnFilterChange = vi.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  it('updates search filter on input', async () => {
    render(
      <SearchFilters
        filters={{}}
        onFilterChange={mockOnFilterChange}
      />
    );

    await userEvent.type(
      screen.getByPlaceholderText(/search/i),
      'test'
    );

    expect(mockOnFilterChange).toHaveBeenCalledWith(
      expect.objectContaining({
        search: 'test'
      })
    );
  });

  it('updates risk tier filter on select', async () => {
    render(
      <SearchFilters
        filters={{}}
        onFilterChange={mockOnFilterChange}
      />
    );

    await userEvent.selectOptions(
      screen.getByLabelText(/risk tier/i),
      'HIGH'
    );

    expect(mockOnFilterChange).toHaveBeenCalledWith(
      expect.objectContaining({
        riskTier: 'HIGH'
      })
    );
  });

  it('shows active filters', () => {
    render(
      <SearchFilters
        filters={{
          riskTier: 'HIGH',
          deploymentType: 'PRODUCTION'
        }}
        onFilterChange={mockOnFilterChange}
      />
    );

    expect(screen.getByText('HIGH Risk')).toBeInTheDocument();
    expect(screen.getByText('PRODUCTION')).toBeInTheDocument();
  });
});
```

### Best Practices

1. **Component Testing**
   - Render testing
   - Event handling
   - State changes

2. **Props Testing**
   - Required props
   - Optional props
   - Invalid props

3. **Visual Testing**
   - Layout checks
   - Style changes
   - Responsive design

4. **Accessibility Testing**
   - ARIA roles
   - Keyboard navigation
   - Screen readers