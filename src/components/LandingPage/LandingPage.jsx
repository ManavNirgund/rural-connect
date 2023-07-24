import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appName, locations } from "../../assets/data/enums";

const LandingPage = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const apiKey = "0d3a2f07e77443c291a86b824d47cf6f";
        const requests = locations.map((location) =>
          axios.get(`http://localhost:8080/current`, {
            params: {
              country: location.country,
              city: location.city,
              // apiKey,
            },
          })
        );

        const responses = await Promise.all(requests);
        const data = responses.map((response) => response.data);
        setWeatherData(data);
      } catch (error) {
        alert(`${error.name}: ${error.message}`);
        // Handle the error, show a user-friendly message, or log it.
      }
    };

    fetchData();
  }, []);

  return (
    <Container
      sx={{
        width: "100%",
      }}
    >
      <div>
        <Typography variant="h3" marginBottom="2rem" fontWeight="meduim">
          Welcome to {appName.title}!
        </Typography>
        <Typography variant="subtitle1" marginBottom="2rem">
          {appName.title} is a weather application that provides up-to-date
          weather information for various cities around the world. With a
          user-friendly interface, we aim to keep our users informed about the
          current weather conditions, temperature, and more. Our mission is to
          make weather forecasting accessible and reliable to everyone.
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginBottom: "2rem", textAlign: "start", fontWeight: 550 }}
        >
          Check out the current weathers of few places
        </Typography>
      </div>

      {weatherData && (
        <Grid
          container
          spacing={2}
          display="flex"
          flexWrap="nowrap"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          justifyItems="center"
          alignContent="center"
          marginBottom="2rem"
        >
          {weatherData.map((data, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              {!data ? (
                <>Loading...</>
              ) : (
                <Paper>
                  <Card
                    component={Link}
                    sx={{
                      maxWidth: 345,
                    }}
                    to="forecast"
                  >
                    <CardMedia>
                      <img
                        src={`http://openweathermap.org/img/w/${data.icon}.png`}
                        width="100vw"
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography variant="overline">{data.city}</Typography>
                      <Typography variant="h6" component="h6">
                        {data.country}
                      </Typography>
                      <Typography variant="h6" component="h6">
                        {`${Math.round(data.celsiusTemperature)}°C`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default LandingPage;
