import React from "react";
import EmployeeForm from "./EmployeeForm";
import AssetForm from "./AssetForm";
import { createAsset } from "../API/asset";

const Modale = ({columns,formType ,setFormData,formData }) => {
  
  const handleSubmit = async (formData) => {
    const res = await createAsset(formData);
    console.log(formData)
    console.log(res, 'modale')
  };
  const handleClose = () =>{
    setFormData({})
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
                columns={columns}
                setFormData={setFormData}
                formData={formData}

              />
            ) : (
              <EmployeeForm
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
              onClick={()=>{handleSubmit(formData)}}
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
