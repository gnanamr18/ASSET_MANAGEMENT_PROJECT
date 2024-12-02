import React, { useState } from "react";
import Modale from "../Components/Modale"; // Updated to import Modal component
import Table from "../Components/Table";

const Assets = () => {
  let columns = [
    { heading:"ADD NEW ASSET",name: "Name", placeholder: "Enter the Name" },
    { heading:"ADD NEW ASSET",name: "ID", placeholder: "Enter the ID" },
    { heading:"ADD NEW ASSET",name: "Dept", placeholder: "Enter the Department" },
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
        Add Asset
      </button>

      <Modale
        employeeData={employeeData}
        onSave={handleEmployeeSave}
        columns={columns}
      />
      <Table columns={columns} />
    </div>
  )
}

export default Assets