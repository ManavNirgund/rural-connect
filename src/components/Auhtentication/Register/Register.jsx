import React, { useState } from "react";
import { Sheet } from "@mui/joy";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from 'formik';

const Register = () => {

    const formik = useFormik({
      initialValues:{
        firstname: "",
        lastname: "",
        dateOfBirth: "",
        mail: "",
        phoneNo: "",
        address: "",
        password: "",
        gender: "",
        role: "USER",
      }
    })

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginBottom: "3rem",
        marginTop: "3rem",
        height: "70%",
        backgroundColor: "#870040",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        component="form"
        noValidate
        className="mt-5 p-5 pt-5"
        onSubmit={formik.handleSubmit}
      >
        <Typography
          variant="h4"
          sx={{ marginTop: "-3rem", color: "white" }}
          align="center"
        >
          Register
        </Typography>
        <Grid container spacing={2} className="mt-4">
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="filled"
              id="firstname"
              name="firstname"
              label="First Name"
              value={formik.values.firstname}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="filled"
              id="firstname"
              name="firstname"
              label="First Name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Register;
