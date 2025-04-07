import React, { useState, useEffect } from "react";
import DynamicForm from "../../Components/Form/DynamicForm.jsx";
import { formFields } from "../../Components/Form/FormFields.jsx";
import RenderTableData from "../../Components/Table/RenderTableData.jsx";
import Modal from "react-modal";

function BookDataList() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    author: "",
    genre: "Select Genre",
    category: "Select Category",
    publication_year: 0,
    publisher: "",
    rating: 0,
  });
  const [filterData, setFilterData] = useState({
    search: "",
    genre: "Select Genre",
    category: "Select Category",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Pagination state
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    limit: 5,
    totalItems: 0, // To hold the total number of items
  });

  // Fetch books from localStorage with pagination
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
    setPagination((prev) => ({
      ...prev,
      totalItems: storedBooks.length,
      totalPages: Math.ceil(storedBooks.length / pagination.limit),
    }));
    setFilteredBooks(storedBooks.slice(0, pagination.limit)); // Display first page of books
  }, [pagination.currentPage, pagination.limit]);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle filter field changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData((prev) => {
      const updatedFilterData = { ...prev, [name]: value };
      filterBooks(updatedFilterData);
      return updatedFilterData;
    });
  };

  // Filter books based on search, genre, and category
  const filterBooks = (filters) => {
    const { search, genre, category } = filters;
    const filtered = books.filter((book) => {
      const bookName = book.name.toLowerCase();
      const bookAuthor = book.author.toLowerCase();
      const bookGenre = book.genre.toLowerCase();
      const bookCategory = book.category.toLowerCase();
      const bookPublisher = book.publisher.toLowerCase();
      const searchTerm = search.toLowerCase();

      return (
        (bookName.includes(searchTerm) ||
          bookAuthor.includes(searchTerm) ||
          bookGenre.includes(searchTerm) ||
          bookCategory.includes(searchTerm) ||
          bookPublisher.includes(searchTerm)) &&
        (genre === "Select Genre" || bookGenre === genre.toLowerCase()) &&
        (category === "Select Category" ||
          bookCategory === category.toLowerCase())
      );
    });
    setFilteredBooks(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the stored books from localStorage
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

    // Generate a new book ID (ID based on the length of the array)
    const newId =
      storedBooks.length > 0 ? storedBooks[storedBooks.length - 1].id + 1 : 1;

    // Create the new book with an ID
    const newBook = {
      ...formData,
      id: newId, // Assign the ID
    };

    // Add the new book to the array of stored books
    const updatedBooks = [...storedBooks, newBook];

    // Save the updated books array back to localStorage
    localStorage.setItem("books", JSON.stringify(updatedBooks));

    // Update the state
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks);

    // Reset the form data
    setFormData({
      id: 0,
      name: "",
      author: "",
      genre: "Select Genre",
      category: "Select Category",
      publication_year: 0,
      publisher: "",
      rating: 0,
    });

    // Display success message
    alert("Book created successfully!");
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.totalPages) {
      setPagination((prev) => ({
        ...prev,
        currentPage: page,
      }));
      const startIndex = (page - 1) * pagination.limit;
      const endIndex = startIndex + pagination.limit;
      setFilteredBooks(books.slice(startIndex, endIndex));
    }
  };

  // const resetLocalStorage = () => {
  //   localStorage.clear();
  //   setBooks([]);
  //   setFilteredBooks([]);
  //   setPagination({
  //     currentPage: 1,
  //     totalPages: 1,
  //     limit: 5,
  //     totalItems: 0,
  //   });
  //   setFormData({
  //     id: 0,
  //     name: "",
  //     author: "",
  //     genre: "Select Genre",
  //     category: "Select Category",
  //     publication_year: 0,
  //     publisher: "",
  //     rating: 0,
  //   });
  //   setSuccessMessage("All data has been cleared and reset.");
  // };

  return (
    <div className="book-list">
      <h2>Book Details</h2>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      <div className="filters">
        <div className="filter-form">
          <DynamicForm
            fields={formFields[2].data}
            onSubmit={handleSubmit}
            formData={filterData}
            onChange={handleFilterChange}
            hideSubmit={true}
          />
        </div>

        <div className="add-new-book">
          <button className="btn" onClick={openModal}>
            Add New Book
          </button>
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
            formData={formData}
            onChange={handleChange}
            hideSubmit={false}
          />
          <button className="close-modal" onClick={closeModal}>
            x
          </button>
        </Modal>
      </div>

      {/* <div className="reset-all">
        <button className="btn" onClick={resetLocalStorage}>
          Reset All Data
        </button>
      </div> */}

      <div className="book-table">
        <RenderTableData
          books={filteredBooks}
          setRowData={setFilteredBooks}
          setBooks={setBooks}
        />
      </div>

      <div className="pagination">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          disabled={pagination.currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(pagination.totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={pagination.currentPage === pageNum ? "active" : ""}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          disabled={pagination.currentPage === pagination.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BookDataList;
