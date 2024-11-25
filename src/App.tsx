import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { ModelList } from './pages/ModelList';
import { ModelDetail } from './pages/ModelDetail';
import { NewModel } from './pages/NewModel';
import { EditModel } from './pages/EditModel';
import { Sidebar } from './components/layout/Sidebar';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-50">
        {/* Header */}
        <header className="bg-primary text-white shadow-custom sticky top-0 z-50">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Brain className="h-8 w-8 text-accent" />
                <span className="ml-2 text-xl font-semibold">
                  Model Governance & Observability
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex max-w-[1600px] mx-auto">
          <Sidebar />
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<ModelList />} />
              <Route path="/models/new" element={<NewModel />} />
              <Route path="/models/:id" element={<ModelDetail />} />
              <Route path="/models/:id/edit" element={<EditModel />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}