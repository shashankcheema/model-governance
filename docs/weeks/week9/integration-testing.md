## Integration Testing

### Implementation

```tsx
// src/tests/integration/modelForm.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModelForm } from '../../components/ModelForm';

describe('ModelForm Integration', () => {
  const mockSubmit = vi.fn();
  const mockCancel = vi.fn();

  beforeEach(() => {
    mockSubmit.mockClear();
    mockCancel.mockClear();
  });

  it('submits form with valid data', async () => {
    render(
      <ModelForm
        onSubmit={mockSubmit}
        onCancel={mockCancel}
      />
    );

    // Fill form fields
    await userEvent.type(
      screen.getByLabelText(/model name/i),
      'Test Model'
    );
    
    await userEvent.selectOptions(
      screen.getByLabelText(/risk tier/i),
      'HIGH'
    );
    
    await userEvent.type(
      screen.getByLabelText(/owner/i),
      'John Doe'
    );

    // Submit form
    await userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(mockSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Test Model',
        riskTier: 'HIGH',
        owner: 'John Doe'
      })
    );
  });

  it('shows validation errors for invalid data', async () => {
    render(
      <ModelForm
        onSubmit={mockSubmit}
        onCancel={mockCancel}
      />
    );

    // Submit without required fields
    await userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/owner is required/i)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});

// src/tests/integration/modelList.test.tsx
describe('ModelList Integration', () => {
  it('filters models correctly', async () => {
    render(<ModelList />);

    // Search for a model
    await userEvent.type(
      screen.getByPlaceholderText(/search/i),
      'Churn'
    );

    expect(screen.getByText('Customer Churn Predictor')).toBeInTheDocument();
    expect(screen.queryByText('Fraud Detection System')).not.toBeInTheDocument();

    // Apply risk tier filter
    await userEvent.selectOptions(
      screen.getByLabelText(/risk tier/i),
      'HIGH'
    );

    expect(screen.getByText('Customer Churn Predictor')).toBeInTheDocument();
  });

  it('shows empty state when no results', async () => {
    render(<ModelList />);

    await userEvent.type(
      screen.getByPlaceholderText(/search/i),
      'nonexistent model'
    );

    expect(screen.getByText(/no models found/i)).toBeInTheDocument();
  });
});
```

### Best Practices

1. **Test Setup**
   - Clean environment
   - Proper mocks
   - Realistic data

2. **User Interactions**
   - Natural flows
   - Error handling
   - Loading states

3. **Assertions**
   - Clear expectations
   - Complete checks
   - Error cases

4. **Test Isolation**
   - Independent tests
   - Clean teardown
   - No side effects