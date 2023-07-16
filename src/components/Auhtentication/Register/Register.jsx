import React, { useState } from "react";
import { Sheet } from "@mui/joy";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import logo from "../../../assets/images/png/logo-no-background.png";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      uname: "",
      country: "",
      city: "",
      userid: "",
      pwd: "",
    },
  });

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginBottom: "3rem",
        marginTop: "3rem",
        height: "70%",
        backgroundColor: "#ececec",
        // borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        component="form"
        noValidate
        className="mt-5 p-5 pt-5"
        onSubmit={formik.handleSubmit}
      >
        {/* <div style={{marginBottom: "5rem"}}></div> */}
        <img src={logo} height="250vh" style={{ marginTop: "2rem" }} />
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
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              id="userid"
              name="userid"
              label="Email"
              value={formik.values.userid}
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
              id="pwd"
              name="pwd"
              label="Pasword"
              type="text"
              value={formik.values.pwd}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item display="flex">
            <Button variant="contained" sx={{
              display: "flex",
              alignSelf: "center"
            }}> Register </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Register;
