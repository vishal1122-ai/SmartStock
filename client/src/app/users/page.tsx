"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="loader border-t-blue-500 border-4 w-10 h-10 rounded-full animate-spin"></div>
        <span className="ml-4 text-gray-500">Loading users...</span>
      </div>
    );
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch users. Please try again later.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <Header name="Users" />
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-4">
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row.userId}
          checkboxSelection
          disableColumnMenu
          className="!text-gray-800"
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f3f4f6",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f9fafb",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Users;
