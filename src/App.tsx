import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Enroll from './pages/Enroll/Enroll';

const App: React.FC = () => {
  console.log('Rendering App Component');
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enroll" element={<Enroll />} />
    </Routes>
  );
};

export default App;
