import React, { useEffect, useState } from "react";
import Button from "../Components/Button"; // Adjust the import path if needed
import { assetTableColumns } from "../Data/assetHistoryData";
import Table from "../Components/Table";
import { getAssetHistory } from "../API/assetHistory";
const AssetHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [history, setHistory] = useState();

  const handleSearch = async (searchTerm) => {
    const res = await getAssetHistory(searchTerm);
    console.log(searchTerm)
    setHistory(res?.data);
  };
 

  return (
    <div className="p-4">
      <div>AssetHistory</div>
      <div className="d-flex align-items-center gap-3 mb-2 mt-2">
        <input
          type="text"
          className="form-control flex-grow-1"
          style={{ height: "48px" }} // Sets the height of the input field
          placeholder="Type the Asset ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          text="Search"
          className="btn-primary  px-4 py-2 h-14 rounded-md hover:bg-blue-600"
          handleClick={()=>handleSearch(searchTerm)}
        />
      </div>

      <div>
        <Table columns={assetTableColumns} component={"assetHistory"} history={history} />
      </div>
    </div>
  );
};

export default AssetHistory;
