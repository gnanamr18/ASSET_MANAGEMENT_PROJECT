import React, { useState, useEffect } from "react";
import Modale from "../Components/Modale"; // Updated to import Modal component
import Table from "../Components/Table";
import { employeeColumns, employeeTableColumns } from "../Data/employeeData";
import NavPills from "../Components/NavPills";
import { getAllEmployee } from "../API/dept";


const Employee = () => {
  const [formData, setFormData] = useState({});
  const [row, setRow] = useState();
  const [dept, setDept] = useState("IT");

  

  const getEmployee = async (dept) => {
    const res = await getAllEmployee(dept);
    setRow(res.data.data);
  };

    useEffect(() => {
      if (dept) {
        getEmployee(dept);
      }
    }, [dept]);

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

      <NavPills dept={dept} setDept={setDept} />

      <Modale
        formData={formData}
        setFormData={setFormData}
        columns={employeeColumns}
        formType="employee" 

      />
        <Table columns={employeeTableColumns} row={row} component={'employee'} />
        </div>
  );
};

export default Employee;
