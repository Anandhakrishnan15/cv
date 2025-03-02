import React from "react";

const FormFields = ({ formData, handleChange, formFields }) => {
  return (
    <>
      {formFields.map(({ label, name, type, placeholder }) => (
        <label key={name} className="form-label">
          {label}
          {type === "textarea" ? (
            <textarea
              className="form-input"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required
            ></textarea>
          ) : (
            <input
              className="form-input"
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required={name !== "company"}
            />
          )}
        </label>
      ))}
    </>
  );
};

export default FormFields;