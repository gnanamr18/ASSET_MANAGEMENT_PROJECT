// Button.jsx
import React from 'react';

const Button = ({ text, className ,handleClick }) => {
  return (
    <button type="button" className={`btn ${className}` } onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
