import React from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import logo from "../../../assets/images/logo/png/logo-no-background.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import login from "../../../assets/images/cartoon-giffs/Auth/Tablet-login.gif";

const Register = () => {
  const nav = useNavigate();

  const getYesterdayDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return yesterday.toISOString().split("T")[0];
  };

  const formik = useFormik({
    initialValues: {
      userid: "",
      uname: "",
      country: "",
      city: "",
      pwd: "",
      role: "user",
      bonus_points: 0,
      last_login_date: getYesterdayDate(),
    },
    onSubmit: (values) => {
      console.log("Before register: ", values);
      axios
        .post("http://localhost:8080/register", values)
        .then((res) => {
          console.log("Register: ", res.data);
          nav("/login");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column-reverse", sm: "row" }}
      justifyContent="space-between"
    >
      {/* Login image */}
      <img
        src={login}
        alt="login"
        height={{ xs: "100vh", sm: "auto" }}
        style={{ marginLeft: "5rem", alignSelf: "center" }}
      />

      {/* Login form */}
      <Container
        maxWidth="sm"
        sx={{
          marginBottom: "3rem",
          marginTop: "3rem",
          height: "70%",
          backgroundColor: "#ececec",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.75)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          noValidate
          className=""
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} width="400vw" style={{ marginTop: "2rem" }} />
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
                label="User ID"
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
                label="Password"
                type="password"
                value={formik.values.pwd}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4} />
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
                marginTop: "-2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>Don't have an account?</Typography>
              <Button
                variant="link"
                component={Link}
                to={"/login"}
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
    </Box>
  );
};

export default Register;
