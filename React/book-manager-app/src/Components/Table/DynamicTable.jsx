import React from "react";

function DynamicTable({ headerData, rowData }) {
  if (!headerData.length || !rowData.length) {
    return <p>No data available</p>;
  }

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headerData.map((header, index) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
