import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Employee from "./Pages/Employee";
import Assets from "./Pages/Assets";
import Dept from "./Pages/Dept";
import AssetHistory from "./Pages/AssetHistory";
import IssueReturn from "./Pages/IssueReturn";

const App = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="container-fluid p-4" style={{ marginLeft: "250px" }}>
        <Routes>
          <Route path="/employee" element={<Employee />} />
          <Route path="/stocks" element={<Assets />} />
          <Route path="/dept" element={<Dept />} />
          <Route path="/assetHistory" element={<AssetHistory />} />
          <Route path="/issueReturn" element={<IssueReturn/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
