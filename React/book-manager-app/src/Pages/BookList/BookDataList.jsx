import React from "react";
import DynamicForm from "../../Components/Form/DynamicForm.jsx";
import { formFields } from "../../Components/Form/FormFields.jsx";
import RenderTableData from "../../Components/Table/RenderTableData.jsx";

function BookDataList() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form has been submitted");
  };

  // const handleAddForm = (e) => {
  //   e.preventDefault();
  //   alert("Add Button");
  // };
  return (
    <div className="book-list">
      <h3>Book Details</h3>
      {/* <div className="book-title">Book List</div> */}
      <div className="filters">
        <div className="filter-form">
          <DynamicForm
            fields={formFields[2].data}
            onSubmit={handleSubmit}
          ></DynamicForm>
        </div>
        <div className="form-toggle"></div>
        <div className="add-new-book">
          Add New Book
          <DynamicForm
            fields={formFields[1].data}
            onSubmit={handleSubmit}
          ></DynamicForm>
        </div>
      </div>
      <div className="book-table">
        <RenderTableData></RenderTableData>
      </div>
      <div className="paggination-data"></div>
    </div>
  );
}

export default BookDataList;
