import React from "react";

const Button = ({ text }) => {
  return (
    <button className="createbutton">
      {text}
      <span></span>
    </button>
  );
};

export default Button;
