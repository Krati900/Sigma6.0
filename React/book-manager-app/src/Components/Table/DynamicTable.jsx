import React, { useState } from "react";
import Modal from "react-modal"; 
import DynamicForm from "../Form/DynamicForm";
import { formFields } from "../Form/FormFields";

function DynamicTable({ headerData, rowData }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form has been submitted");
  };

  const openModal = (type) => {
    setModalType(type); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(""); 
  };
  
  if (!headerData.length || !rowData.length) {
    return <p>No data available</p>;
  }

  const extendedHeaderData = [
    ...headerData,
    { label: "Edit", name: "edit" },
    { label: "Delete", name: "delete" },
  ];

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {extendedHeaderData.map((header, index) => (
              <th key={index}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headerData.map((header, colIndex) => (
                <td key={colIndex}>{row[header.name] || "N/A"}</td>
              ))}

              <td>
                <button onClick={() => openModal("edit")}>Edit</button>
              </td>
              <td>
                <button onClick={() => openModal("delete")}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen && modalType === "edit"}
        onRequestClose={closeModal}
        contentLabel="Edit Book"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Edit Book</h2>
        <DynamicForm
          fields={formFields[4].data}
          onSubmit={handleSubmit}
        />
        <button className="close-modal" onClick={closeModal}>x</button>
      </Modal>

      <Modal
        isOpen={isModalOpen && modalType === "delete"}
        onRequestClose={closeModal}
        contentLabel="Delete Book"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Delete Book</h2>
        <p>Are You sure you wants to delete this book's data..? </p>
        <DynamicForm
          fields={formFields[3].data}
          onSubmit={handleSubmit}
        />
        <button className="close-modal" onClick={closeModal}>x</button>
      </Modal>
    </div>
  );
}

export default DynamicTable;
