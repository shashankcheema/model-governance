## Basic Layout Components

### 1. Layout Component

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

### 2. Header Component

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

### 3. Sidebar Component

```tsx
// src/components/layout/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Database, Settings, BarChart2, HelpCircle } from 'lucide-react';
import { Tooltip } from '../ui/tooltip';

const navigation = [
  {
    name: 'Model Inventory',
    href: '/',
    icon: Database,
    description: 'View and manage model metadata',
    tooltip: 'Centralized repository for all ML models'
  },
  {
    name: 'Data Quality',
    href: '/data-quality',
    icon: BarChart2,
    description: 'Monitor data quality metrics',
    tooltip: 'Track and analyze data quality metrics'
  },
  {
    name: 'Admin Settings',
    href: '/admin',
    icon: Settings,
    description: 'System configuration',
    tooltip: 'Manage system settings and configurations'
  }
];

export function Sidebar() {
  return (
    <div className="w-64 flex-shrink-0 hidden md:block">
      <div className="h-full py-8 pr-4">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => `
                  group flex flex-col px-3 py-2 rounded-lg
                  ${isActive
                    ? 'bg-accent/10 text-accent'
                    : 'text-primary-600 hover:bg-primary-50 hover:text-accent'
                  }
                `}
              >
                <div className="flex items-center">
                  <Icon className="h-5 w-5 mr-3" />
                  <span className="font-medium">{item.name}</span>
                  <Tooltip content={item.tooltip} className="ml-2" />
                </div>
                <span className="mt-1 text-xs text-primary-500 group-hover:text-primary-600">
                  {item.description}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
```