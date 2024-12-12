import React from "react";
import { useState, useContext } from "react";
import Context from "../ContextApi/Context";

const NavPills = ({Dept}) => {
  const [selectedDept, setSelectedDept] = useState("IT"); // Default pill

  const  depts  = useContext(Context);
  const handleOnClick=(dept)=>{
    setSelectedDept(dept)
    Dept(dept)
  }

  return (
    <div className="nav nav-pills mb-3 mt-3" role="tablist">
      {depts?.length > 0 ? (
        depts?.map((dept,index) => (
          <button
            key={index}
            className={`nav-link ${selectedDept === dept ? "active" : ""}`}
            onClick={() => handleOnClick(dept?.symbol)}
          >
            {dept.dept}
          </button>
        ))
      ) : (
        <p>Loading departments...</p>
      )}
    </div>
  );
};

export default NavPills;
