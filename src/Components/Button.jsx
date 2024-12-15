import React, { useState } from "react";
import Button from "./Button"; // Adjust the import path if needed

const AssetHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Logic to handle search functionality
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search asset history..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          text="Search"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleSearch}
        />
      </div>
      <div>AssetHistory</div>
    </div>
  );
};

export default AssetHistory;
