import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Timeline from './components/Timeline';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Timeline />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
