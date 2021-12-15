import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { format as formatDate } from "date-fns";

export const TableView = ({ products }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "price",
      headerName: "Price",
      width: 200,
      valueGetter: (params) => {
        const price = params.value;
        const decimal = params.row.decimal;
        return (price / Math.pow(10, decimal)).toFixed(10);
      },
    },
    {
      field: "createdAt",
      headerName: "Created Date",
      width: 200,
      valueGetter: (params) => {
        const date = new Date(params.value);
        return formatDate(date, "dd MMMM yyyy");
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
