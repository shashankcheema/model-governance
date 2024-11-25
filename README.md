# Model Inventory Management System

A comprehensive web application for managing ML model metadata, built with React, TypeScript, and Tailwind CSS.

## Overview

This system provides a centralized platform for tracking and managing machine learning models across different lines of business. It includes features for:

- Model metadata management
- Risk tier tracking
- Infrastructure details
- Schema information
- Team management
- ServiceNow integration
- Anomalo monitoring
- SLA tracking

## Features

- 📊 **Model Dashboard**: View and filter all models
- 🔍 **Detailed Model Views**: Comprehensive information about each model
- ✏️ **Model Management**: Create, edit, and update model information
- 🏷️ **Categorization**: Organize models by risk tier, deployment type, and line of business
- 🔄 **Schema Tracking**: Monitor input, output, and source tables
- 👥 **Team Management**: Track model owners, developers, and stakeholders
- 📈 **Infrastructure Details**: Keep track of deployment information
- ⏱️ **SLA Monitoring**: Track runtime and performance metrics

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Development**: Vite

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd model-inventory-system
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Project Structure

\`\`\`
src/
├── components/         # Reusable UI components
│   ├── form/          # Form-related components
│   └── ui/            # Basic UI components
├── pages/             # Page components
├── lib/              # Utilities and helpers
├── types/            # TypeScript type definitions
└── schemas/          # Zod validation schemas
\`\`\`

## Development

### Available Scripts

- \`npm run dev\`: Start development server
- \`npm run build\`: Build for production
- \`npm run preview\`: Preview production build
- \`npm run lint\`: Run ESLint
- \`npm run type-check\`: Run TypeScript type checking

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent file structure
- Write meaningful comments
- Use proper TypeScript types

### Component Guidelines

1. Keep components focused and single-responsibility
2. Use TypeScript interfaces for props
3. Implement proper error handling
4. Follow accessibility best practices
5. Maintain consistent styling patterns

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Follow the code review process

## License

MIT License - see LICENSE file for details