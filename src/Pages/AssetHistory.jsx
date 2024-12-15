import React, { useState } from "react";
import Button from "../Components/Button"; // Adjust the import path if needed

const AssetHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Logic to handle search functionality
    console.log("Searching for:", searchTerm);
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
          className="btn btn-primary  px-4 py-2 h-14 rounded-md hover:bg-blue-600"
          // style={{ height: "52px", width: "100px" }} // Matches the height of the input and sets a fixed width
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default AssetHistory;
