import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { socials } from "../../Assets/data/enums"; // Replace with your socials data
// import Footer from "../Footer/Footer"; // If you have a Footer component, include it here
import { appName, usefulLinks } from "../../Assets/data/enums"; // Replace with your app name and useful links data

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
        backgroundColor: "rgb(135, 0, 64)",
      }}
      id="about"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            color="white"
            sx={{
              marginBottom: "10px",
            }}
          >
            About {appName}
          </Typography>

          <Typography variant="body2" color="antiquewhite">
            {appName} is a weather application that provides up-to-date weather
            information for various cities around the world. With a
            user-friendly interface, we aim to keep our users informed about the
            current weather conditions, temperature, and more. Our mission is to
            make weather forecasting accessible and reliable to everyone.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            color="white"
            sx={{
              marginBottom: "10px",
            }}
          >
            Useful Links
            {usefulLinks.map((item) => (
              <Typography
                key={item.id}
                variant="body2"
                sx={{ marginTop: "5px" }}
              >
                <Link to={item.to} style={{ color: "antiquewhite" }}>
                  {item.name}
                </Link>
              </Typography>
            ))}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            color="white"
            sx={{
              marginBottom: "10px",
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
                color: "antiquewhite",
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
