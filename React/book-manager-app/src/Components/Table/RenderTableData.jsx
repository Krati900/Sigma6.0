import React from "react";
import { TableHeaderData } from "./TableHeader/TableHeaderData";
import { BookData } from "../../Pages/BookList/BookData";
import DynamicTable from "./DynamicTable";

function RenderTableData() {
  console.log("TableHeaderData:", TableHeaderData);
  console.log("Header Data:", TableHeaderData[0]?.data);

  return (
    <div>
      <DynamicTable
        headerData={TableHeaderData[0]?.data}
        rowData={BookData.data}
      />
    </div>
  );
}

export default RenderTableData;
