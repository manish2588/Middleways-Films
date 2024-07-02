import React from 'react';

const Button = ({ type = "button", onClick, className, style, label }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
