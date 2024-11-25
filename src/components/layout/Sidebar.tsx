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

        {/* Help Section */}
        <div className="mt-8 px-3">
          <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
            <div className="flex items-center mb-2">
              <HelpCircle className="h-5 w-5 text-accent mr-2" />
              <h3 className="font-medium text-primary-900">Need Help?</h3>
            </div>
            <p className="text-sm text-primary-600">
              Check our documentation or contact support for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}