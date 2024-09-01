import LoginAsBuyer from './pages/LoginAsBuyer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginHome from './pages/LoginHome'
import React from 'react';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginHome />} />
      <Route path="/LoginAsBuyer" element={<LoginAsBuyer />} />
    </Routes>
  </Router>
  )
}

export default App
