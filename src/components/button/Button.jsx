import React from "react";

const StyledButton = ({ styleClassName, label, type }) => {
  return (
    <button className={styleClassName} type={type}>
      {label}
    </button>
  );
};

export default StyledButton;
