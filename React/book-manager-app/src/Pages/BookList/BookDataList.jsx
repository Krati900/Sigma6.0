import React, { useState } from "react";
import DynamicForm from "../../Components/Form/DynamicForm.jsx";
import { formFields } from "../../Components/Form/FormFields.jsx";
import RenderTableData from "../../Components/Table/RenderTableData.jsx";
import Modal from "react-modal"; 

function BookDataList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form has been submitted");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="book-list">
      <h2>Book Details</h2>
      <div className="filters">
        <div className="filter-form">
          <DynamicForm
            fields={formFields[2].data}
            onSubmit={handleSubmit}
          ></DynamicForm>
        </div>
        <div className="form-toggle"></div>

        <div className="add-new-book">
          <button className="btn" onClick={openModal}>Add New Book</button>
        </div>
         
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Add New Book"
          className="modal"
          overlayClassName="overlay" 
        >
          <h2>Add New Book</h2>
          <DynamicForm
            fields={formFields[1].data}
            onSubmit={handleSubmit}
          />
          <button className="close-modal" onClick={closeModal}>x</button>
        </Modal>
      </div>
      <div className="book-table">
        <RenderTableData></RenderTableData>
      </div>
      <div className="pagination-data"></div>
    </div>
  );
}

export default BookDataList;
