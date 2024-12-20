import React from 'react'
import { useState,useEffect } from 'react';

const DeptForm = ({columns,setFormData,formData}) => {
    // Handle input change dynamically
    const handleChange = (e, field) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });}
  return (
    <form>
    {columns?.map((item, index) => (
      <div key={index} className="mb-3">
        <label htmlFor={item.key} className="col-form-label">
          {item.name}:
        </label> */
         <input
          type="text"
          className="form-control"
          id={item.key}
          value={formData[item.key] || ''}
          onChange={(e) => handleChange(e, item.key)}
          placeholder={item.placeholder}
          required
        />
      </div>
    ))}
  </form>
  )
}

export default DeptForm