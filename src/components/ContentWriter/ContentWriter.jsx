import { Box, Container, Grid, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/png/logo-no-background.png";

const ContentWriter = () => {
  const [content, setContent] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userid = localStorage.getItem("email");

    axios
      .get(`http://localhost:8080/users/${userid}`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => console.log(err.name, err.message));
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      const userid = localStorage.getItem("email");

      const postData = {
        title: values.title,
        content: values.content,
        author: userData,
        publishedDate: "2023-07-25T12:34:56",
      };

      axios
        .post(`http://localhost:8080/create-article/${userid}`, postData)
        .then((res) => {
          console.log(postData);
        })
        .catch((error) => {
          alert(`${error.name}: ${error.message}`);
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
        maxWidth: "30%",
        minWidth: "35vw",
        backgroundColor: "#ececec",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.75)",
      }}
    >
      <Box
        component="form"
        noValidate
        className="mt-3 p-5 pt-5"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ececec",
        }}
      >
        <img
          src={logo}
          style={{
            marginTop: "2rem",
            maxWidth: "60vh",
          }}
        />

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
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              type="text"
              variant="outlined"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="content"
              name="content"
              label="Content"
              type="text"
              variant="outlined"
              multiline
              rows={10}
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              color="primary"
              sx={{
                display: "flex",
                marginBottom: "1rem",
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

export default ContentWriter;
