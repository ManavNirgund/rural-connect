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
import React, { useState } from "react";

const Forecast = () => {
  const [forecastData, setForecastData] = useState(null);

  const formik = useFormik({
    initialValues: {
      city: "",
      country: "",
    },
    onSubmit: (values) => {
      axios
        .get(`http://localhost:8080/forecast`, {
          params: {
            country: values.country,
            city: values.city,
          },
        })
        .then((res) => {
          console.log(res.data.entries);
          setForecastData(res.data.entries);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const tableStyle = {
    minWidth: "650px",
    maxWidth: "80%",
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
    <>
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
          </Grid>
        </Box>
      </Container>

      {forecastData && (
        <div style={{display: "flex", justifyContent: "center"}}>
          <Table sx={tableStyle}>
            <TableHead>
              <TableRow>
                <TableCell sx={headerCellStyle}>Date</TableCell>
                <TableCell sx={headerCellStyle}>Temperature</TableCell>
                <TableCell sx={headerCellStyle}>Climate</TableCell>
              </TableRow>
            </TableHead>
            {forecastData.map((item, index) => (
              <TableBody key={index}>
                <TableRow>
                  <TableCell sx={cellStyle}>{item.date}</TableCell>
                  <TableCell sx={cellStyle}>
                    {item.celsiusTemperature}
                  </TableCell>
                  <TableCell sx={cellStyle}>{item.description} <img src={`http://openweathermap.org/img/w/${item.weatherIcon}.png`}/> </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </div>
      )}
    </>
  );
};

export default Forecast;
