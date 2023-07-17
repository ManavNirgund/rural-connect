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
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      console.log("Login: ", values);
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
        // borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.75)",
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
              label="Email"
              type="text"
              variant="standard"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="standard"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
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
