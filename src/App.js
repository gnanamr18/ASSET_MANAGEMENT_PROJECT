import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Employee from './Pages/Employee';
import Dashboard from './Pages/Dashboard';
import Assets from './Pages/Assets';
import Dept from "./Pages/Dept"

const App = () => {
  return (
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="container-fluid p-4" style={{ marginLeft: '250px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/stocks" element={<Assets />} />
            <Route path="/dept" element={<Dept />} />

          </Routes>
        </div>
      </div>
  );
};

export default App;
