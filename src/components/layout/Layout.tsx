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