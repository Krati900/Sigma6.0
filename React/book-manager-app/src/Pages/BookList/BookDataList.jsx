import React, { useState, useEffect } from "react";
import DynamicForm from "../../Components/Form/DynamicForm.jsx";
import { formFields } from "../../Components/Form/FormFields.jsx";
import RenderTableData from "../../Components/Table/RenderTableData.jsx";
import Modal from "react-modal";
import axios from "axios";

function BookDataList() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
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
    limit: 10,
    totalItems: 0, // To hold the total number of items
  });

  // Fetch books with pagination
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8083/api/books", {
          params: {
            page: pagination.currentPage,
            limit: pagination.limit,
          },
        });
        setBooks(response.data.data);
        setFilteredBooks(response.data.data);
        setPagination((prev) => ({
          ...prev,
          totalItems: response.data.pagination.total_books,
          totalPages: response.data.pagination.total_pages,
        }));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8083/api/books",
        formData
      );
      console.log("Book added:", response.data.data);
      alert("Book created successfully!");
      setSuccessMessage(
        response.data.data.status || "Book created successfully!"
      );
      setIsModalOpen(false);
      setBooks([...books, response.data.data]);
      setFilteredBooks([...filteredBooks, response.data.data]);

      setFormData({
        name: "",
        author: "",
        genre: "Select Genre",
        category: "Select Category",
        publication_year: 0,
        publisher: "",
        rating: 0,
      });
    } catch (error) {
      console.error("Error adding book:", error);
      setSuccessMessage("");
      alert("Error adding book. Please try again.");
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, currentPage: page }));
    }
  };

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

      <div className="book-table">
        <RenderTableData books={filteredBooks} />
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
