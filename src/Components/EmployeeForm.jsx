import React, { useState, useEffect } from "react";

const EmployeeForm = ({ employeeData, columns, onSave }) => {
  const [formData, setFormData] = useState({});

  // Sync formData with employeeData whenever it changes
  useEffect(() => {
    setFormData(employeeData);
  }, [employeeData]);

  // Handle input change dynamically
  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };
  return (
    <form>
      {columns.map((item, index) => (
        <div key={index} className="mb-3">
          <label htmlFor={item.name.toLowerCase()} className="col-form-label">
            {item.name}:
          </label> */
           <input
            type="text"
            className="form-control"
            id={item.name.toLowerCase()}
            value={formData[item.name.toLowerCase()]}
            onChange={(e) => handleChange(e, item.name.toLowerCase())}
            placeholder={item.placeholder}
          />
        </div>
      ))}
    </form>
  );
};

export default EmployeeForm;
