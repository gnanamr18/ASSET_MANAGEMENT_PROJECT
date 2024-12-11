import React from "react";
import EmployeeForm from "./EmployeeForm";
import AssetForm from "./AssetForm";

const Modale = ({ employeeData, onSave, columns, assetData,formType  }) => {
  const handleSubmit = () => {
    onSave(employeeData); // Call the parent save function
  };
  const handleClose = () =>{
    onSave({
      name: "",
      id: "",
      dept: "",
      designation: "",
    })
  }

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
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
          {formType === "asset" ? (
              <AssetForm
                assetData={assetData}
                onSave={onSave}
                columns={columns}
              />
            ) : (
              <EmployeeForm
                employeeData={employeeData}
                onSave={onSave}
                columns={columns}
              />
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              {formType === "asset" ? "Create Asset" : "Add Employee"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modale;
