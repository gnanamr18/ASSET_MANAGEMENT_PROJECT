// Button.jsx
import React from "react";
import Modale from "../Components/Modale"; // Updated to import Modal component


const Button = ({ text, className, handleClick,toggle,target }) => {
  return (
    <button
      type="button"
      data-bs-toggle={toggle}
      data-bs-target={target}
      className={`btn ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
