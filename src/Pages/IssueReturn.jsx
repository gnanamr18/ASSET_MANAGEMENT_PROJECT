import React, { useState, useEffect } from "react";
import Modale from "../Components/Modale"; // Updated to import Modal component
import Table from "../Components/Table";
import Button from "../Components/Button";
import { getissueAssets } from "../API/issueReturnAssets";
import { issueReturnTableColumns } from "../Data/issueReturnAsset";

const IssueReturn = () => {
    const [row, setRow] = useState()
  
  const getissueReturn = async () => {
    const res = await getissueAssets();
    console.log(res);
    setRow(res?.data);
  };

  useEffect(() => {
    getissueReturn();
  }, []);
  return (
    <div>
      <div>
        <Button
          text={"IssueAsset"}
          className={'btn-primary mt-4 mb-4'}
          data-bs-toggle="modal"
          data-bs-target="#employeeModal"
        />

        {/* <Modale
          columns={assetColumns}
          formData={formData}
          setFormData={setFormData}
          formType="issueReturn"
        /> */}
        <h5 className="fw-bold">Last Transactions</h5>

        <Table columns={issueReturnTableColumns} history={row} component="issueReturn" />
      </div>
    </div>
  );
};

export default IssueReturn;
