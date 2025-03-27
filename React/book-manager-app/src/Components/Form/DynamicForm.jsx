import React from "react";

function DynamicForm({ fields, onSubmit }) {
  return (
    <div className="form-layout">
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => {
          const { label, type, name, options, placeholder, defaultValue} = field;

          return (
            <div key={index} className="form-fields">
              <label htmlFor={name}>{label}</label>

              {type === "input" && (
                <input
                  type="text"
                  name={name}
                  id={name}
                  placeholder={placeholder}
                />
              )}

              {type === "email" && (
                <input
                  type="email"
                  name={name}
                  id={name}
                  placeholder={placeholder}
                />
              )}

              {type === "password" && (
                <input
                  type="password"
                  name={name}
                  id={name}
                  placeholder={placeholder}
                />
              )}

              {type === "select" && options && (
                <select name={name} id={name}  defaultValue={defaultValue}>
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
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
