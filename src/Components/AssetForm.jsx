import React from 'react'
import { useState,useEffect } from 'react';

const AssetForm = (columns,assetData) => {
    const [formData, setFormData] = useState({});

    // Sync formData with assetData whenever it changes
    useEffect(() => {
      setFormData(assetData);
    }, [assetData]);
  
    // Handle input change dynamically
    const handleChange = (e, field) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });}
  return (
    <form>
    {columns.map((item, index) => (
      <div key={index} className="mb-3">
          {console.log(item)}
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
  )
}

export default AssetForm