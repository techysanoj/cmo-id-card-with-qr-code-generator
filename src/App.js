// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import IDCardDisplay from './components/IDCardDisplay';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>QR Code ID Card Generator</h1>
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/id-card" element={<IDCardDisplay />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;