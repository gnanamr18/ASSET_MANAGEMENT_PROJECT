import React from "react";
import EmployeeForm from "./EmployeeForm";

const Modale = ({ employeeData, onSave, columns }) => {
  const handleSubmit = () => {
    onSave(employeeData); // Call the parent save function
  };

  return (
    <div
      className="modal fade"
      id="employeeModal"
      tabIndex="-1"
      aria-labelledby="employeeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="employeeModalLabel">
              {columns[0]?.heading || "Add New Employee"}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <EmployeeForm
              employeeData={employeeData}
              onSave={onSave}
              columns={columns}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modale;
