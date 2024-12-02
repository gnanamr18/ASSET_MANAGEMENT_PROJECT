import React, { useState } from "react";
import Modale from "../Components/Modale"; // Updated to import Modal component
import Table from "../Components/Table";

const Employee = () => {
  let columns = [
    { heading:"ADD NEW EMPLOYEE",name: "Name", placeholder: "Enter the Name" },
    { heading:"ADD NEW EMPLOYEE",name: "ID", placeholder: "Enter the ID" },
    { heading:"ADD NEW EMPLOYEE",name: "Dept", placeholder: "Enter the Department" },
    { heading:"ADD NEW EMPLOYEE",name: "Designation", placeholder: "Enter the Designation" },
  ];

  const [employeeData, setEmployeeData] = useState({
    name: "",
    id: "",
    dept: "",
    designation: "",
  });

  const handleEmployeeSave = (data) => {
    console.log("Employee saved:", data);
    setEmployeeData(data);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#employeeModal"
      >
        Add employee
      </button>

      <Modale
        employeeData={employeeData}
        onSave={handleEmployeeSave}
        columns={columns}
      />
      <Table columns={columns} />
    </div>
  );
};

export default Employee;
