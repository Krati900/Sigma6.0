import React from "react";

function DynamicForm({
  fields,
  onSubmit,
  formData,
  onChange,
  hideSubmit = false,
}) {
  const renderField = (field, index) => {
    const { label, type, name, placeholder, options, defaultValue } = field;

    return (
      <div key={index} className="form-group">
        {label && <label htmlFor={name}>{label}</label>}{" "}
        {type === "input" && (
          <input
            type="text"
            name={name}
            value={formData[name] || ""}
            placeholder={placeholder}
            onChange={onChange}
          />
        )}
        {type === "number" && (
          <input
            type="number"
            name={name}
            value={formData[name] || ""}
            placeholder={placeholder}
            onChange={onChange}
          />
        )}
        {type === "email" && (
          <input
            type="email"
            name={name}
            value={formData[name] || ""}
            placeholder={placeholder}
            onChange={onChange}
          />
        )}
        {type === "password" && (
          <input
            type="password"
            name={name}
            value={formData[name] || ""}
            placeholder={placeholder}
            onChange={onChange}
          />
        )}
        {type === "select" && (
          <select
            name={name}
            value={formData[name] || defaultValue}
            onChange={onChange}
          >
            {options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        {type === "radio" && (
          <div className="radio-group">
            {options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  name={name}
                  value={option}
                  checked={formData[name] === option}
                  onChange={onChange}
                />
                <label htmlFor={`${name}-${option}`}>{option}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={onSubmit}>
      {fields.map((field, index) => renderField(field, index))}
      {!hideSubmit && (
        <button type="submit" className="btn">
          Submit
        </button>
      )}
    </form>
  );
}

export default DynamicForm;
