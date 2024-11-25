## Week 1: Project Foundation

### Development Environment Setup

1. **Project Initialization**
```bash
npm create vite@latest model-inventory -- --template react-ts
cd model-inventory
npm install
```

2. **Install Dependencies**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.1",
    "lucide-react": "^0.344.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2",
    "vite": "^5.1.4"
  }
}
```

3. **Configure Tailwind CSS**
```js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          // ... color scale
        },
        accent: {
          DEFAULT: '#FF5722',
          // ... color scale
        }
      }
    }
  }
}
```

### Basic Layout Components

1. **Layout Component**
```tsx
// src/components/layout/Layout.tsx
import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-primary-50">
      <Header />
      <div className="max-w-[1600px] mx-auto">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
```

2. **Header Component**
```tsx
// src/components/layout/Header.tsx
import React from 'react';
import { Brain, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-primary text-white shadow-custom sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-accent" />
              <span className="ml-2 text-xl font-semibold">
                Model Governance & Observability
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-primary-800 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-primary-800 rounded-full">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
```

### Basic Routing Setup

1. **App Component**
```tsx
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ModelList } from './pages/ModelList';
import { ModelDetail } from './pages/ModelDetail';
import { NewModel } from './pages/NewModel';
import { EditModel } from './pages/EditModel';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ModelList />} />
          <Route path="/models/new" element={<NewModel />} />
          <Route path="/models/:id" element={<ModelDetail />} />
          <Route path="/models/:id/edit" element={<EditModel />} />
        </Routes>
      </Layout>
    </Router>
  );
}
```

### Utility Functions

1. **Utils Setup**
```tsx
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | null | undefined) {
  if (!date) return 'N/A';
  try {
    return new Date(date).toLocaleDateString();
  } catch (error) {
    return 'Invalid date';
  }
}
```

### Exercise Solutions

1. Create a responsive header ✅
2. Implement sidebar navigation ✅
3. Set up basic routing ✅
4. Style main layout ✅