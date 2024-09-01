import LoginAsBuyer from './pages/LoginAsBuyer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginHome from './pages/LoginHome'
import React from 'react';
import LoginAsSeller from './pages/LoginAsSeller';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginHome />} />
      <Route path="/LoginAsBuyer" element={<LoginAsBuyer />} />
      <Route path="/LoginAsSeller" element={<LoginAsSeller />} />
    </Routes>
  </Router>
  )
}

export default App
