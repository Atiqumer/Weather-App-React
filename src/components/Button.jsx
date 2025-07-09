import React from "react";

const Button = ({ onClick, value, className = "btn-primary", type = "button" }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
