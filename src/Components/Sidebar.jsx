import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="sidebar bg-dark text-white p-3"
        style={{ width: "250px", height: "100vh" }}
      >
        <h4 className="mb-4">AssetPro</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/employee">
              <i className="bi bi-person-workspace"></i>

              <span className="ms-2">Employee</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/stocks">
              <i className="bi bi-bag-fill"></i>
              <span className="ms-2">Stocks/Assets</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dept">
              <i class="bi bi-bank2"></i>
              <span className="ms-2">Dept</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/issueReturn">
              <i class="bi bi-arrow-left-right"></i>
              <span className="ms-2">IssueReturn</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/assetHistory">
              <i class="bi bi-bookmarks-fill"></i>
              <span className="ms-2">AssetHistory</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content area (This part will not show directly inside Sidebar anymore) */}
    </div>
  );
};

export default Sidebar;
