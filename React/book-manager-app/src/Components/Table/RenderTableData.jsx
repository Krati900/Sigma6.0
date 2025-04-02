import React from "react";
import { TableHeaderData } from "./TableHeader/TableHeaderData"; // Your header data
import DynamicTable from "./DynamicTable";

function RenderTableData({ books }) {
  // Ensure the rowData (books) matches the expected structure
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
        headerData={TableHeaderData[0]?.data} // The headers from TableHeaderData
        rowData={formattedBooks} // The transformed books data
      />
    </div>
  );
}

export default RenderTableData;
