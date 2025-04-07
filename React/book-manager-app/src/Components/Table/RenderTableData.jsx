import React from "react";
import { TableHeaderData } from "./TableHeader/TableHeaderData";
import DynamicTable from "./DynamicTable";

function RenderTableData({
  books,
  setRowData,
  setBooks,
  pagination,
  handlePageChange,
}) {
  const formattedBooks = books.map((book) => ({
    id: book.id,
    name: book.name,
    author: book.author,
    genre: book.genre,
    category: book.category,
    publication_year: book.publication_year,
    publisher: book.publisher,
    rating: book.rating,
  }));

  console.log("Formatted Books Data:", formattedBooks);

  return (
    <div>
      <DynamicTable
        headerData={TableHeaderData[0]?.data}
        rowData={formattedBooks}
        setRowData={setRowData}
        setBooks={setBooks}
      />
    </div>
  );
}

export default RenderTableData;
