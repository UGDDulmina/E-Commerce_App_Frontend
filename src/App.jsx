import SignupAsBuyer from './pages/SignupAsBuyer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupHome from './pages/SignupHome'
import React from 'react';
import SignupAsSeller from './pages/SignupAsSeller';
import LoginAsSeller from './pages/LoginAsSeller'; 
import LoginAsBuyer from './pages/LoginAsSeller'; 
import Sample from './pages/Sample';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignupHome />} />
      <Route path="/SignupAsBuyer" element={<SignupAsBuyer />} />
      <Route path="/SignupAsSeller" element={<SignupAsSeller />} />
      <Route path="/LoginAsSeller" element={< LoginAsSeller/>} />
      <Route path="/LoginAsBuyer" element={< LoginAsBuyer/>} />
      <Route path="/Sample" element={<Sample />} />
    </Routes>
  </Router>
  )
}

export default App
