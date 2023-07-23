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

const LandingPage = () => {
  const [WeatherDataNY, setWeatherDataNY] = useState(null);
  const [WeatherDataP, setWeatherDataP] = useState(null);
  const [WeatherDataM, setWeatherDataM] = useState(null);
  const [WeatherDataB, setWeatherDataB] = useState(null);
  const [WeatherDataH, setWeatherDataH] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/current`, {
        params: {
          country: "USA",
          city: "New york",
        },
      })
      .then((res) => {
        setWeatherDataNY(res.data);
      })
      .catch((err) => {
        alert(`${err.name}: ${err.message}`);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/current`, {
        params: {
          country: "India",
          city: "Palakkad",
        },
      })
      .then((res) => {
        console.log(res.data);
        setWeatherDataP(res.data);
      })
      .catch((err) => {
        alert(`${err.name}: ${err.message}`);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/current`, {
        params: {
          country: "India",
          city: "Mumbai",
        },
      })
      .then((res) => {
        // console.log(res.data);
        setWeatherDataM(res.data);
      })
      .catch((err) => {
        alert(`${err.name}: ${err.message}`);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/current`, {
        params: {
          country: "India",
          city: "Bengaluru",
        },
      })
      .then((res) => {
        // console.log(res.data);
        setWeatherDataB(res.data);
      })
      .catch((err) => {
        alert(`${err.name}: ${err.message}`);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/current`, {
        params: {
          country: "India",
          city: "Hubli",
        },
      })
      .then((res) => {
        // console.log(res.data);
        setWeatherDataH(res.data);
      })
      .catch((err) => {
        alert(`${err.name}: ${err.message}`);
      });
  }, []);

  return (
    <Container
      sx={{
        width: "100%",
      }}
    >
      <div>
        <Typography variant="h3" marginBottom="2rem" fontWeight="meduim">
          Welcome to Rural Connect!
        </Typography>
        <Typography variant="subtitle1" marginBottom="2rem">
          Rural Connect is a weather application that provides up-to-date
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
        <Grid item xs={12}>
          {!WeatherDataNY ? (
            <>Loading...</>
          ) : (
            // <h1>{`The temperature in ${weatherData?.city} is currently `}</h1>
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
                    src={`http://openweathermap.org/img/w/${WeatherDataNY.icon}.png`}
                    width="100vw"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="overline">
                    {WeatherDataNY.city}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {WeatherDataNY.country}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {`${Math.round(WeatherDataNY.celsiusTemperature)}°C`}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          )}
        </Grid>

        <Grid item xs={12}>
          {!WeatherDataP ? (
            <>Loading...</>
          ) : (
            // <h1>{`The temperature in ${weatherData?.city} is currently `}</h1>
            <Paper>
              <Card
                component={Link}
                sx={{
                  maxWidth: 345,
                }}
                to="/forecast"
              >
                <CardMedia>
                  <img
                    src={`http://openweathermap.org/img/w/${WeatherDataP.icon}.png`}
                    width="100vw"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="overline">
                    {WeatherDataP.city}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {WeatherDataP.country}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {`${Math.round(WeatherDataP.celsiusTemperature)}°C`}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          )}
        </Grid>
        <Grid item xs={12}>
          {!WeatherDataB ? (
            <>Loading...</>
          ) : (
            // <h1>{`The temperature in ${weatherData?.city} is currently `}</h1>
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
                    src={`http://openweathermap.org/img/w/${WeatherDataB.icon}.png`}
                    width="100vw"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="overline">
                    {WeatherDataB.city}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {WeatherDataB.country}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {`${Math.round(WeatherDataB.celsiusTemperature)}°C`}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          )}
        </Grid>

        <Grid item xs={12}>
          {!WeatherDataH ? (
            <>Loading...</>
          ) : (
            // <h1>{`The temperature in ${weatherData?.city} is currently `}</h1>
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
                    src={`http://openweathermap.org/img/w/${WeatherDataH.icon}.png`}
                    width="100vw"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="overline">
                    {WeatherDataH.city}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {WeatherDataH.country}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {`${Math.round(WeatherDataH.celsiusTemperature)}°C`}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          )}
        </Grid>

        <Grid item xs={12}>
          {!WeatherDataM ? (
            <>Loading...</>
          ) : (
            // <h1>{`The temperature in ${weatherData?.city} is currently `}</h1>
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
                    src={`http://openweathermap.org/img/w/${WeatherDataM.icon}.png`}
                    width="100vw"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="overline">
                    {WeatherDataM.city}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {WeatherDataM.country}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {`${Math.round(WeatherDataM.celsiusTemperature)}°C`}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
