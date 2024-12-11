import React, { useContext, useEffect, useState } from "react";
import Modale from "../Components/Modale"; // Updated to import Modal component
import Table from "../Components/Table";
import NavPills from "../Components/NavPills";
import { getAssets } from "../API/dept";
import { assetColumns } from "../Data/data";

const Assets = () => {
  const [assetData, setAssetData] = useState({
    name: "",
    id: "",
    dept: "",
    designation: "",
  });
  const [dept, setDept] = useState("IT");
  const [row, setRow] = useState()
  
  const handleEmployeeSave = (data) => {
    console.log("Employee saved:", data);
    setAssetData(data);
  };

  const Dept = (selectDept) => {
    setDept(selectDept);
  };
  const getAsset = async (dept) => {
    console.log(dept)
    const res = await getAssets(dept);
    console.log(res, "assets");
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
          assetData={assetData}
          onSave={handleEmployeeSave}
          columns={assetColumns}
          formType="asset"
        />
        <Table columns={assetColumns} row={row} />
      </div>
    </div>
  );
};

export default Assets;
