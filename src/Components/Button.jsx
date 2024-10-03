import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button>
        {text}
        <span></span>
      </button>
    </>
  );
};

export default Button;
