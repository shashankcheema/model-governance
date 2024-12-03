
# **Backend System Design Document**

## **Project Structure**

```
src/main/java/com/example/modelinventory
├── config
│   └── SwaggerConfig.java
├── controllers
│   ├── ModelInfoController.java
│   ├── MetadataController.java
│   ├── VendorController.java
│   ├── InfrastructureController.java
│   ├── LookupController.java
├── dto
│   ├── ModelInfoRequest.java
│   ├── ModelInfoResponse.java
│   ├── MetadataRequest.java
│   ├── MetadataResponse.java
│   ├── VendorRequest.java
│   ├── VendorResponse.java
│   └── InfrastructureResponse.java
├── entities
│   ├── ModelInfo.java
│   ├── ModelMetadata.java
│   ├── VendorInfo.java
│   ├── FrameworkInfo.java
│   ├── DeploymentTypeInfo.java
│   ├── InfrastructureInfo.java
│   ├── RunFrequencyInfo.java
│   ├── LobInfo.java
│   ├── AnomaloInfo.java
│   ├── ServiceNowInfo.java
│   └── SlaInfo.java
├── exceptions
│   ├── GlobalExceptionHandler.java
│   └── EntityNotFoundException.java
├── repositories
│   ├── ModelInfoRepository.java
│   ├── MetadataRepository.java
│   ├── VendorRepository.java
│   ├── FrameworkRepository.java
│   ├── DeploymentTypeRepository.java
│   ├── InfrastructureRepository.java
│   └── LookupRepositories.java (Optional for small lookup tables)
├── services
│   ├── ModelInfoService.java
│   ├── MetadataService.java
│   ├── VendorService.java
│   ├── InfrastructureService.java
│   ├── LookupService.java
│   └── FrameworkService.java
└── utils
    └── ValidationUtils.java
```

---

## **Overview**

The **Model Inventory Management System** backend is designed to manage metadata, roles, infrastructure, and other details for machine learning or analytics models. The modular architecture ensures scalability and maintainability, leveraging **Spring Boot**, **PostgreSQL**, and **Spring Data JPA**.

---

## **Technology Stack**

- **Language**: Java 17
- **Framework**: Spring Boot
- **Database**: PostgreSQL
- **ORM**: Spring Data JPA
- **API Documentation**: Swagger/OpenAPI
- **Validation**: Hibernate Validator
- **Logging**: SLF4J with Logback

---

## **Database Design**

### **Tables**

1. **`model_info`**
   - Stores core model details with relationships to metadata, roles, and infrastructure.
   
2. **`model_metadata`**
   - Stores extended attributes such as model description, assumptions, and approvals.

3. **`model_roles`**
   - Tracks ownership and responsibility for each model.

4. **Supporting Tables**:
   - `framework_info`, `deployment_type_info`, `run_frequency_info`: Lookup tables for standard configurations.
   - `vendor_info`, `lob_info_table`: Manage vendor and line-of-business data.
   - `infra_info_table`, `anomalo_info_table`, `service_now_info_table`: Track infrastructure and service integrations.

---

## **API Design**

### **Endpoints**

| HTTP Method | Endpoint                           | Description                               |
|-------------|------------------------------------|-------------------------------------------|
| **GET**     | `/api/models`                     | Fetch all models.                        |
| **GET**     | `/api/models/{id}`                | Fetch a specific model by ID.            |
| **POST**    | `/api/models`                     | Create a new model.                      |
| **PUT**     | `/api/models/{id}`                | Update an existing model.                |
| **DELETE**  | `/api/models/{id}`                | Delete a model.                          |
| **GET**     | `/api/metadata/{modelId}`         | Fetch metadata for a model.              |
| **POST**    | `/api/metadata`                   | Add or update metadata.                  |
| **GET**     | `/api/vendors`                    | Fetch all vendors.                       |
| **POST**    | `/api/vendors`                    | Add a new vendor.                        |
| **GET**     | `/api/lookups/frameworks`         | Fetch all frameworks.                    |

---

## **High-Level Architecture Diagram**

```
                    +-----------------------------+
                    |          OKTA              |
                    |  (Authentication Provider) |
                    +-----------------------------+
                                |
                                | Token Validation
                                v
+-----------------------------------------------------+
|                     OCP Cluster                     |
|    +-----------------------------------------+      |
|    |            Application Pod              |      |
|    |  (Spring Boot Backend Application)      |      |
|    +-----------------------------------------+      |
|                   |                                  |
|                   | Secure Connection               |
|                   v                                  |
|       +--------------------------+                  |
|       |         Vault            |                  |
|       | (Secrets Management)     |                  |
|       +--------------------------+                  |
|                   |                                  |
|                   | Database Credentials            |
|                   v                                  |
|       +--------------------------+                  |
|       |      PostgreSQL DB       |                  |
|       |  (Data Persistence)      |                  |
|       +--------------------------+                  |
+-----------------------------------------------------+
```

---

## **Sequence Diagram for API Calls**

```
Client             Application Pod (Spring Boot)           Vault                  OKTA             PostgreSQL
   |                            |                            |                      |                    |
   |---> Send API Request ------|                            |                      |                    |
   |                            |                            |                      |                    |
   |                            |---- Validate Token --------|                      |                    |
   |                            |                            |<----- Token Valid ---|                    |
   |                            |                            |                      |                    |
   |                            |-- Fetch Secrets ---------->|                      |                    |
   |                            |                            |<-- Return Secrets ---|                    |
   |                            |                            |                      |                    |
   |                            |--- Query Database ---------|                      |                    |
   |                            |                            |                      |<-- Data Response --|
   |                            |<--- Send API Response -----|                      |                    |
   |                            |                            |                      |                    |
```

---

## **Validation**

Input validation using Hibernate Validator:
- **Example**:
  ```java
  public class ModelInfoRequest {
      @NotNull
      private String modelName;

      @Size(max = 50)
      private String modelJiraId;

      // Getters and Setters
  }
  ```

---

## **Error Handling**

- **Centralized GlobalExceptionHandler**:
  - Handles common exceptions like `EntityNotFoundException`.
- **Standardized Response Format**:
  ```json
  {
      "timestamp": "2024-11-19T12:00:00",
      "status": 404,
      "error": "Not Found",
      "message": "Model not found with ID: 1",
      "path": "/api/models/1"
  }
  ```

---

## **Development Plan**

### **Phase 1**: Core Modules
- Implement core entities, repositories, and services (`ModelInfo`, `Metadata`, `Vendor`).

### **Phase 2**: Lookup Tables
- Add support for lookup tables like `framework_info`, `run_frequency_info`.

### **Phase 3**: Validations & Documentation
- Add input validations and Swagger documentation.

### **Phase 4**: Deployment
- Set up CI/CD pipelines and deploy on AWS.

---
