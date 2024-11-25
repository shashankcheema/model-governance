## API Documentation

### Type Definitions

```tsx
/**
 * @api Model API Types
 * @description Type definitions for the Model Inventory API
 */

/**
 * @typedef {Object} ModelCreateRequest
 * @property {string} name - The name of the model
 * @property {RiskTier} riskTier - The risk tier level
 * @property {DeploymentType} deploymentType - The deployment environment
 * @property {string} owner - The model owner
 */

/**
 * @typedef {Object} ModelUpdateRequest
 * @property {string} [name] - Updated model name
 * @property {RiskTier} [riskTier] - Updated risk tier
 * @property {DeploymentType} [deploymentType] - Updated deployment type
 */

/**
 * @typedef {Object} ModelResponse
 * @property {number} model_id - Unique identifier
 * @property {string} name - Model name
 * @property {RiskTier} riskTier - Risk tier level
 * @property {string} created_at - Creation timestamp
 * @property {string} updated_at - Last update timestamp
 */
```

### API Methods

```tsx
/**
 * @api Model API Methods
 * @description API methods for managing models
 */

/**
 * Create a new model
 * 
 * @param {ModelCreateRequest} data - Model creation data
 * @returns {Promise<ModelResponse>} Created model
 * @throws {ValidationError} If data is invalid
 */
async function createModel(data: ModelCreateRequest): Promise<ModelResponse>;

/**
 * Update an existing model
 * 
 * @param {number} id - Model ID
 * @param {ModelUpdateRequest} data - Update data
 * @returns {Promise<ModelResponse>} Updated model
 * @throws {NotFoundError} If model not found
 * @throws {ValidationError} If data is invalid
 */
async function updateModel(
  id: number,
  data: ModelUpdateRequest
): Promise<ModelResponse>;

/**
 * Delete a model
 * 
 * @param {number} id - Model ID
 * @returns {Promise<void>}
 * @throws {NotFoundError} If model not found
 */
async function deleteModel(id: number): Promise<void>;
```

### Best Practices

1. **API Documentation**
   - Clear endpoints
   - Request/response formats
   - Error handling

2. **Type Definitions**
   - Complete types
   - Clear descriptions
   - Usage examples

3. **Method Documentation**
   - Parameters
   - Return values
   - Error cases

4. **Standards**
   - Consistent format
   - Complete information
   - Clear examples