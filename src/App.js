// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import EmployeeForm from './components/EmployeeForm';
// import IDCardDisplay from './components/IDCardDisplay';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <h1 className='heading-top'>ID Card with QR Code Generator</h1>
//         <Routes>
//           <Route path="/" element={<EmployeeForm />} />
//           <Route path="/id-card" element={<IDCardDisplay />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import IDCardDisplay from './components/IDCardDisplay';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/id-card" element={<IDCardDisplay />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;