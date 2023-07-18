import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [isAllUsersSelected, setIsAllUsersSelected] = useState(false);
  const [isWeatherByCountryAndCitySelected, setIsWeatherByCountryAndCitySelected] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        setUserData(res.data);
      })

      .catch((err) => console.error(err));
  }, []);

  const formik = useFormik({
    initialValues: {
      city: "",
      country: "",
    }
  })

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
    <Container
      sx={{
        marginTop: "5vh",
      }}
    >
      <div>
        <Button
          variant={isAllUsersSelected === true ? "contained" : "outlined"}
          onClick={() => {
            // handleButtonClick(1);
            setIsAllUsersSelected(true);
          }}
          sx={{
            border: "2px solid #870040",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            marginRight: "8px",
            color: "black",
            fontSize: "1rem",
            backgroundColor:
              isAllUsersSelected === true ? "antiquewhite" : "inherit",
            "&:hover": {
              border: "none",
            },
          }}
        >
          All users
        </Button>
        <Button
          variant={isWeatherByCountryAndCitySelected === true ? "contained" : "outlined"}
          onClick={() => {
            // handleButtonClick(1);
            setIsAllUsersSelected(true);
          }}
          sx={{
            border: "2px solid #870040",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            marginRight: "8px",
            color: "black",
            fontSize: "1rem",
            backgroundColor:
            isWeatherByCountryAndCitySelected === true ? "antiquewhite" : "inherit",
            "&:hover": {
              border: "none",
            },
          }}
        >
          Weather from country and city
        </Button>
      </div>

      {isAllUsersSelected && (
        <Table sx={tableStyle}>
          <TableHead>
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
      )}

      {isWeatherByCountryAndCitySelected && (
        <Container
        maxWidth="sm"
        sx={{
          marginBottom: "3rem",
          marginTop: "3rem",
          height: "70%",
          width: "455.75px",
          backgroundColor: "#ececec",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.75)",
        }}
      >
        <Box
          component="form"
          noValidate
          className="mt-5 p-5 pt-5"
          onSubmit={formik.handleSubmit}
        >
          {/* <img src={logo} width="400vw" style={{ marginTop: "2rem" }} /> */}
          <Typography
            variant="h4"
            marginTop="3rem"
            sx={{ color: "GrayText" }}
            align="center"
          >
            Register
          </Typography>
          <Grid
            container
            spacing={2}
            className="mt-4"
            sx={{
              marginTop: "1rem",
            }}
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="uname"
                name="uname"
                label="User Name"
                value={formik.values.uname}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} display="flex">
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  display: "flex",
                  alignSelf: "center",
                  marginBottom: "1rem",
                }}
              >
                Register
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>Don't have an account?</Typography>
              <Button
                variant="link"
                component={Link}
                to={"/"}
                sx={{
                  fontWeight: "bolder",
                  textDecoration: "none",
                  color: "blue",
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      )}
    </Container>
  );
};

export default Dashboard;
