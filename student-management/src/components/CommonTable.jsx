import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CommonTable = ({ columns, rows, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
       
        <TableHead sx={{ backgroundColor: "#f0f0f0" }}>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.field}>
                <Typography fontWeight="bold">{col.headerName}</Typography>
              </TableCell>
            ))}
            {(onEdit || onDelete) && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={row.id || idx}>
              {columns.map((col) => (
                <TableCell key={col.field}>{row[col.field]}</TableCell>
              ))}
              {(onEdit || onDelete) && (
                <TableCell>
                  {onEdit && (
                    <IconButton color="primary" onClick={() => onEdit(row)}>
                      <EditIcon />
                    </IconButton>
                  )}
                  {onDelete && (
                    <IconButton color="error" onClick={() => onDelete(row)}>
                      <DeleteIcon />
                    </IconButton>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
