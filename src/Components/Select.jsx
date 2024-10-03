import React from "react";

const Select = ({ label, options, name, fn }) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <select onChange={fn} id={name} name={name} required>
        <option value={undefined} hidden>
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
