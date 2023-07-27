import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { appName, socials, services } from "../../assets/data/enums";

const WeatherAppFooter = () => {
  return (
    <Box
      component="footer"
      color="white"
      py={3}
      sx={{
        color: "white",
        py: 3,
        textAlign: "center",
        backgroundColor: "#75B59E",
      }}
      id="about"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            color="#333366"
            sx={{
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            About {appName.title}
          </Typography>

          <Typography variant="subtitle1" color="black">
            {appName.title} is a weather application that provides up-to-date
            weather information for various cities around the world. With a user
            friendly interface, we aim to keep our users informed about the
            current weather conditions, temperature, and more. Our mission is to
            make weather forecasting accessible and reliable to everyone.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            color="#333366"
            sx={{
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Useful Links
          </Typography>
          {services.map((item) => (
            <Typography variant="subtitle1" key={item.id}>
              <Link to={item.to} style={{ color: "black" }}>
                {item.name}
              </Link>
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            color="#333366"
            sx={{
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Socials
          </Typography>
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline",
                marginLeft: "10px",
                color: "black",
              }}
            >
              {item.icon}
            </a>
          ))}
        </Grid>
        {/* If you have a Footer component, include it here */}
        {/* <Grid item xs={12}>
          <Footer />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default WeatherAppFooter;
