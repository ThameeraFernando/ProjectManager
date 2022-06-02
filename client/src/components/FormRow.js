import React from "react";

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  isReadOnly,
  isHidden,
  color,
}) => {
  return (
    <div className="form-row">
      <label
        htmlFor={name}
        className="form-label"
        hidden={isHidden}
        style={{ color: color }}
      >
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        readOnly={isReadOnly}
        hidden={isHidden}
      />
    </div>
  );
};

export default FormRow;
