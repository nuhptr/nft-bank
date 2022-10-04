import React from "react";

const Button = ({ styles, name, onClick }) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
