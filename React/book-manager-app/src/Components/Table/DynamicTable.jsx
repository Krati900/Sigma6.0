import React, { useState } from "react";
import Modal from "react-modal";
import DynamicForm from "../Form/DynamicForm";
import { formFields } from "../Form/FormFields";

function DynamicTable({ headerData, rowData, setRowData, setBooks }) {
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

  // // Refresh data from localStorage
  // const refreshData = () => {
  //   const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
  //   setBooks(storedBooks);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedBooks = [...rowData];

    updatedBooks = JSON.parse(localStorage.getItem("books")) || [];

    if (modalType === "edit") {
      // Update book in localStorage
      updatedBooks = updatedBooks.map((book) =>
        book.id === currentBook.id ? { ...book, ...formData } : book
      );
      localStorage.setItem("books", JSON.stringify(updatedBooks));

      alert("Book updated successfully!");
    } else if (modalType === "delete") {
      // Delete book from localStorage
      updatedBooks = updatedBooks.filter((book) => book.id !== currentBook.id);
      localStorage.setItem("books", JSON.stringify(updatedBooks));

      alert("Book deleted successfully!");
    }

    setRowData(updatedBooks);
    setBooks(updatedBooks);

    closeModal();
    // refreshData(); // Refresh the book list after edit/delete
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
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
              <td>
                <button onClick={() => openModal("delete", row)}>
                  <i className="fa-solid fa-trash-can"></i>
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
        <button className="btn" onClick={handleSubmit}>
          Confirm Delete
        </button>
        <button className="close-modal" onClick={closeModal}>
          x
        </button>
      </Modal>
    </div>
  );
}

export default DynamicTable;
