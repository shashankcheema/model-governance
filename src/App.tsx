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