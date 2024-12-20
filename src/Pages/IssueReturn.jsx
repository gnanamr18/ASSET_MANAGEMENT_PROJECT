import React, { useState, useEffect } from "react";
import Modale from "../Components/Modale"; // Updated to import Modal component
import Table from "../Components/Table";
import Button from "../Components/Button";
import { getissueAssets } from "../API/issueReturnAssets";
import {
  issueReturnTableColumns,
  issueReturnColumn,
} from "../Data/issueReturnAsset";

const IssueReturn = () => {
  const [row, setRow] = useState();
  const [formData, setFormData] = useState({});

  const getissueReturn = async () => {
    const res = await getissueAssets();
  };

  useEffect(() => {
    getissueReturn();
  }, []);
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary mt-4 mb-4"
            data-bs-toggle="modal"
            data-bs-target="#employeeModal"
          >
            Assign Asset
          </button>

          <button
            type="button"
            className="btn btn-primary mt-4 mb-4"
            data-bs-toggle="modal"
            data-bs-target="#employeeModal"
          >
            Return Asset
          </button>
        </div>

        <Modale
          columns={issueReturnColumn}
          formData={formData}
          setFormData={setFormData}
          formType="issueReturn"
        />
        <h5 className="fw-bold">Last Transactions</h5>

        <Table
          columns={issueReturnTableColumns}
          history={row}
          component="issueReturn"
        />
      </div>
    </div>
  );
};

export default IssueReturn;
