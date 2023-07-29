import React, { useEffect, useRef, useState } from "react";
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

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [isAllUsersSelected, setIsAllUsersSelected] = useState(true);
  const [
    isWeatherByCountryAndCitySelected,
    setIsWeatherByCountryAndCitySelected,
  ] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [name, setName] = useState("");
  const weatherTable = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        setUserData(res.data);
      })

      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const userid = localStorage.getItem("email");
    console.log(userid);
    if (userid != null) {
      axios.get(`http://localhost:8080/users/${userid}`).then((res) => {
        console.log(res.data);
        setName(res.data.uname);
      });
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      city: "",
      country: "",
    },
    onSubmit: (values) => {
      axios
        .get(`http://localhost:8080/current`, {
          params: {
            country: values.country,
            city: values.city,
          },
        })
        .then((res) => {
          console.log(res.data);
          setWeatherData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const tableStyle = {
    minWidth: "650px",
    borderCollapse: "collapse",
    marginBottom: "2rem",
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
            setIsWeatherByCountryAndCitySelected(false);
            setWeatherData(null);
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
          variant={
            isWeatherByCountryAndCitySelected === true
              ? "contained"
              : "outlined"
          }
          onClick={() => {
            setIsWeatherByCountryAndCitySelected(true);
            setIsAllUsersSelected(false);
          }}
          sx={{
            border: "2px solid #870040",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            marginRight: "8px",
            color: "black",
            fontSize: "1rem",
            backgroundColor:
              isWeatherByCountryAndCitySelected === true
                ? "antiquewhite"
                : "inherit",
            "&:hover": {
              border: "none",
            },
          }}
        >
          Weather from city and country
        </Button>
      </div>

      {isAllUsersSelected && (
        <div>
          <Typography
            variant="h4"
            sx={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            {`Welcome ${name}! Here is a list of all our users:`}
          </Typography>
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
        </div>
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
              variant="h5"
              // marginTop="0.5rem"
              sx={{ color: "GrayText" }}
              align="center"
            >
              Weather of the world
            </Typography>
            <Grid
              container
              spacing={2}
              className="mt-4"
              display="flex"
              alignItems="center"
              sx={{
                marginTop: "1rem",
              }}
            >
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="city"
                  name="city"
                  label="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="country"
                  name="country"
                  label="Country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  Get Data
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  sx={{
                    display: "flex",
                    alignSelf: "end",
                    marginBottom: "1rem",
                  }}
                  onClick={() => setIsWeatherByCountryAndCitySelected(false)}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
      {weatherData && (
        <Table sx={tableStyle} id="current">
          <TableHead>
            <TableRow>
              <TableCell sx={headerCellStyle}> City </TableCell>
              <TableCell sx={headerCellStyle}> Country </TableCell>
              <TableCell sx={headerCellStyle}> Sky </TableCell>
              <TableCell sx={headerCellStyle}> Temperature </TableCell>
            </TableRow>
          </TableHead>
          <TableBody ref={weatherTable}>
            <TableRow>
              <TableCell sx={cellStyle}>{weatherData.city}</TableCell>
              <TableCell sx={cellStyle}>{weatherData.country}</TableCell>
              <TableCell sx={cellStyle}>{weatherData.description}</TableCell>
              <TableCell sx={cellStyle}>
                {weatherData.celsiusTemperature}°C
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </Container>
  );
};

export default Dashboard;
