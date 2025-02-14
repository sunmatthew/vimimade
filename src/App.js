import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import Commissions from './pages/Commissions'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/commissions" element={<Commissions />} />
      </Routes>
    </Router>
  );
}

export default App;
