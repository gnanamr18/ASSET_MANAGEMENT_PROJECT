import React, { useContext, useEffect, useState } from "react";
import Modale from "../Components/Modale"; // Updated to import Modal component
import Table from "../Components/Table";
import NavPills from "../Components/NavPills";
import { getAssets } from "../API/dept";
import { assetColumns,assetTableColumns } from "../Data/data";

const Assets = () => {
  const [dept, setDept] = useState("IT");
  const [row, setRow] = useState()
  const [formData, setFormData] = useState({});
  
  const Dept = (selectDept) => {
    setDept(selectDept);
  };
  const getAsset = async (dept) => {
    const res = await getAssets(dept);
    setRow(res.data.data)
  };

  useEffect(() => {
    if (dept) {
      getAsset(dept);
    }
  }, [dept]);
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#employeeModal"
        >
          Add Asset
        </button>
        <NavPills Dept={Dept} />

        <Modale
          columns={assetColumns}
          formData={formData}
          setFormData={setFormData}
          formType="asset" 
        />
        <Table columns={assetTableColumns} row={row} />
      </div>
    </div>
  );
};

export default Assets;
