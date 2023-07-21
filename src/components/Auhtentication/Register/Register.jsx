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
import { Link, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      userid: "",
      uname: "",
      pwd: "",
      country: "",
      city: "",
      role: "user",
      weather: "sunny",
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
  );
};

export default Register;
