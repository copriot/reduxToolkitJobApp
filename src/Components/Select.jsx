import React from "react";

const Select = ({ label, options, name }) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <select id={name} name={name}>
        <option value="" hidden>
          Seçiniz
        </option>
        {options.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
