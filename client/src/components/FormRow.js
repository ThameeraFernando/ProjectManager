import React from "react";

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  isReadOnly,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        readOnly={isReadOnly}
      />
    </div>
  );
};

export default FormRow;
