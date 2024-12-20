import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import AssetForm from "./AssetForm";
import { createAsset } from "../API/asset";
import { createEmployee } from "../API/employee";
import { Alert } from "./Alert";
import IssueReturnForm from "./IssueReturnForm";
import { assignAsset } from "../API/issueReturnAssets";

const Modale = ({ columns, formType, setFormData, formData }) => {
  const [alertData, setAlertData] = useState(false);

  const handleSubmit = async (formData, createFunction) => {
    const res = await createFunction(formData);
    if (res) {
      setAlertData(true);
      setTimeout(() => {
        setAlertData(false);
      }, 2000);
    } else {
      setAlertData(false);
    }
  };

  const handleClose = () => {
    setFormData({});
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
              onClick={handleClose}
            ></button>
          </div>
          <div className="p-4">
            {alertData && <Alert alert={"Created Successfully!"} />}
          </div>
          <div className="modal-body">
            {formType === "asset" ? (
              <AssetForm
                columns={columns}
                setFormData={setFormData}
                formData={formData}
              />
            ) : formType === "employee" ? (
              <EmployeeForm
                columns={columns}
                setFormData={setFormData}
                formData={formData}
              />
            ) : formType === "issueReturn" ? (
              <IssueReturnForm
                columns={columns}
                setFormData={setFormData}
                formData={formData}
              />
            ) : null}
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
              onClick={() =>
                handleSubmit(
                  formData,
                  formType === "asset"
                    ? createAsset
                    : formType === "issueReturn"
                    ? assignAsset
                    : createEmployee
                )
              }
            >
              {formType === "asset"
                ? "Create Asset"
                : formType === "issueReturn"
                ? "Assign Asset"
                : "Add Employee"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modale;
