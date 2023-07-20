import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import logo from "../../../assets/images/logo/png/logo-no-background.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

const Login = () => {
  const nav = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  // const location = useLocation();
  // const redirectPath = location.state?.path || "/";

  const formik = useFormik({
    initialValues: { userid: "", pwd: "" },
    onSubmit: (values) => {
      console.log("Login: ", values);

      const formData = new URLSearchParams();
      formData.append("userid", values.userid);
      formData.append("pwd", values.pwd);

      axios
        .post("http://localhost:8080/login", formData)
        .then((res) => {
          console.log("Successfully logged in: ", res.data);
          localStorage.setItem("isAuthenticated", true);
          console.log(`Logged in:  ${isAuthenticated}`);
          if (values.userid == "admin") {
            localStorage.setItem("isAdmin", true);
            nav("/admin");
          } else {
            console.log("Not an admin");
            localStorage.setItem("isAdmin", false)
            alert(res.data);
            formik.resetForm();
          }
        })
        .catch((err) => {
          console.error(err);
          alert(err.response.data);
          localStorage.setItem("isAuthenticated", false);
          console.log(`Not Logged in:  ${isAuthenticated}`);
          formik.resetForm();
        });
    },
  });

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginBottom: "3rem",
        marginTop: "3rem",
        height: "70%",
        width: "30%",
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
        <img src={logo} height="250vh" style={{ marginTop: "2rem" }} />
        <Typography
          variant="h4"
          marginTop="3rem"
          sx={{ color: "GrayText" }}
          align="center"
        >
          Login
        </Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="userid"
              name="userid"
              label="User ID"
              type="text"
              variant="standard"
              value={formik.values.userid}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="pwd"
              name="pwd"
              label="Password"
              type="password"
              variant="standard"
              value={formik.values.pwd}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                display: "flex",
                marginBottom: "1rem",
              }}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
            <Typography>Don't have an account?</Typography>
            <Button
              variant="link"
              component={Link}
              to={"/register"}
              sx={{
                fontWeight: "bolder",
                textDecoration: "none",
                color: "blue",
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
