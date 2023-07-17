import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      // .then((res) => console.log(res.data))
      .then((res) => {
        setUserData(res.data);
      })

      .catch((err) => console.error(err));
  }, []);

  const tableStyle = {
    minWidth: "650px",
    borderCollapse: "collapse",
  };
  
  const cellStyle = {
    border: "1px solid black",
    padding: "8px",
  };
  
  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: "lightgray",
  };

  return (
    <Container sx={{
        marginTop: "5vh",
    }}>
      <Table sx={tableStyle}>
        <TableHead >
          <TableRow>
            <TableCell sx={headerCellStyle}>User ID</TableCell>
            <TableCell sx={headerCellStyle}>User Name</TableCell>
            <TableCell sx={headerCellStyle}>City</TableCell>
            <TableCell sx={headerCellStyle}>Country</TableCell>
            <TableCell sx={headerCellStyle}>Weather</TableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
          {userData.map((data) => (
            <TableRow key={data.userid}>
              <TableCell sx={cellStyle}>{data.userid}</TableCell>
              <TableCell sx={cellStyle}>{data.uname}</TableCell>
              <TableCell sx={cellStyle}>{data.city}</TableCell>
              <TableCell sx={cellStyle}>{data.country}</TableCell>
              <TableCell sx={cellStyle}>{data.weather}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Dashboard;
