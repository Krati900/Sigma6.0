import React from "react";

function DynamicForm({ fields, onSubmit }) {
  return (
    <div className="form-layout">
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => {
          const { label, type, name, options, placeholder, defaultValue } = field;

          return (
            <div key={index} className="form-fields">
              {label && <label htmlFor={name}>{label}</label>}

              {type === "input" && (
                <input
                  type="text"
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  defaultValue={defaultValue || ""}
                />
              )}

              {type === "email" && (
                <input
                  type="email"
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  defaultValue={defaultValue || ""}
                />
              )}

              {type === "password" && (
                <input
                  type="password"
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  defaultValue={defaultValue || ""}
                />
              )}

              {type === "select" && options && (
                <select name={name} id={name} defaultValue={defaultValue}>
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}

              {type === "radio" && options && (
                <div className="radio-group">
                  {options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="radio"
                        name={name}
                        id={`${name}-${option}`}
                        value={option}
                        defaultChecked={defaultValue === option}
                      />
                      <label htmlFor={`${name}-${option}`}>{option}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;
