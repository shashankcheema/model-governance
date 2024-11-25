import React from 'react';
import { Brain, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-primary text-white shadow-custom sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-accent" />
              <span className="ml-2 text-xl font-semibold">
                Model Governance & Observability
              </span>
            </Link>
          </div>

          {/* Right Section */}
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