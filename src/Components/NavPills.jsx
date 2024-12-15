import React from "react";
import { useContext } from "react";
import Context from "../ContextApi/Context";

const NavPills = ({ setDept }) => {
  const depts = useContext(Context);
  const handleOnClick = (dept) => {
    setDept(dept);
  };
  return (
    <div className="nav nav-pills mb-3 mt-3" role="tablist">
      {depts?.length > 0 ? (
        depts?.map((dept, index) => (
          <button
            key={index}
            className={`nav-link px-4 py-2 border-none  ${
              dept === dept?.deptSymbol
                ? "bg-green-500 text-white underline"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleOnClick(dept?.deptSymbol)}
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
