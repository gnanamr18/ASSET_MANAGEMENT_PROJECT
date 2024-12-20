import React, { useContext, useEffect, useState } from "react";
import Modale from "../Components/Modale"; // Updated to import Modal component
import Table from "../Components/Table";
import { deptColumns, deptTableColumns } from "../Data/deptData";
import { getDepts } from "../API/dept";
const Dept = () => {
  const [row, setRow] = useState();
  const [formData, setFormData] = useState({});

  const getAllDept = async (dept) => {
    const res = await getDepts();
    console.log(res)
    setRow(res?.data);
  };

  useEffect(() => {
    getAllDept();
  }, []);
console.log(deptColumns)
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary mt-4 mb-4"
        data-bs-toggle="modal"
        data-bs-target="#employeeModal"
      >
        Add Dept
      </button>
      <Modale
        columns={deptColumns}
        formData={formData}
        setFormData={setFormData}
        formType="dept"
      />
      <Table columns={deptTableColumns} dept={row} component={"dept"}/>
    </div>
  );
};

export default Dept;
