import React from "react";
import { BaseUrl, Apis } from "../constants/Apis";
import useFetch from "../hooks/useFetch";
import { CircularProgress, Box, Typography } from "@mui/material";
import CommonTable from "../components/CommonTable";

const StudentList = () => {
  const studentListUrl = BaseUrl + Apis.STUDENT_LIST;
  const { data: students, loading, error } = useFetch(studentListUrl);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "department", headerName: "Department" },
    { field: "course", headerName: "Course" },
    { field: "age", headerName: "Age" },
  ];

  const formattedRows = students?.map((s) => ({
    ...s,
    course: s.course || "N/A",
    age: s.age ?? "N/A",
  })) || [];

  return (
    <>
      <div className="p-6">
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
          All Students
        </Typography>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <p className="text-red-500">Error loading students</p>
        ) : (
          <CommonTable columns={columns} rows={formattedRows} />
        )}
      </div>
    </>
  );
};

export default StudentList;
