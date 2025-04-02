import React, { useState } from "react";
import Modal from "react-modal";
import DynamicForm from "../Form/DynamicForm";
import { formFields } from "../Form/FormFields";
import axios from "axios";

function DynamicTable({ headerData, rowData, setBooks }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentBook, setCurrentBook] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    genre: "Select Genre",
    category: "Select Category",
    publication_year: 0,
    publisher: "",
    rating: 0,
  });

  const openModal = (type, book = null) => {
    setModalType(type);
    setCurrentBook(book);

    if (book) {
      setFormData({
        name: book.name,
        author: book.author,
        genre: book.genre,
        category: book.category,
        publication_year: book.publication_year,
        publisher: book.publisher,
        rating: book.rating,
      });
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
    setCurrentBook(null);
  };

  const refreshData = async () => {
    try {
      const response = await axios.get("http://localhost:8083/api/books");
      setBooks(response.data.data);
      console.log("Books data refreshed successfully.");
    } catch (error) {
      console.error("Error refreshing books:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      modalType === "edit"
        ? `http://localhost:8083/update/api/books/${currentBook.id}`
        : `http://localhost:8083/delete/api/books/${currentBook.id}`;

    const method = modalType === "edit" ? "PUT" : "DELETE";

    try {
      const response = await axios({
        method: method,
        url: url,
        data: formData,
      });

      console.log(
        `${modalType.charAt(0).toUpperCase() + modalType.slice(1)} book:`,
        response.data.data
      );

      closeModal();

      refreshData();

      alert(
        `${
          modalType.charAt(0).toUpperCase() + modalType.slice(1)
        } book successful.`
      );
    } catch (error) {
      console.error(
        `${modalType.charAt(0).toUpperCase() + modalType.slice(1)} book error:`,
        error
      );

      alert(
        `${modalType.charAt(0).toUpperCase() + modalType.slice(1)} book failed.`
      );
    }
  };

  // Handle input changes in the form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
                <button onClick={() => openModal("edit", row)}>
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
              <td>
                <button onClick={() => openModal("delete", row)}>
                  <i class="fa-solid fa-trash-can"></i>
                </button>
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
          formData={formData}
          onChange={handleChange}
          hideSubmit={false}
        />
        <button className="close-modal" onClick={closeModal}>
          x
        </button>
      </Modal>

      <Modal
        isOpen={isModalOpen && modalType === "delete"}
        onRequestClose={closeModal}
        contentLabel="Delete Book"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Delete Book</h2>
        <p>Are you sure you want to delete this book?</p>
        <DynamicForm
          fields={formFields[3].data}
          onSubmit={handleSubmit}
          formData={formData}
          onChange={handleChange}
          hideSubmit={false}
        />
        <button className="close-modal" onClick={closeModal}>
          x
        </button>
      </Modal>
    </div>
  );
}

export default DynamicTable;
