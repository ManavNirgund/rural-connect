import { Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Feed = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        toast.error(`${err.name}: ${err.message}`);
      });
  }, []);

  return (
    <div>
      <h1>Your Feed</h1>
      {/* Conditional rendering to show articles or a message */}
      {userData.length > 0 ? (
        <Grid container spacing={4}>
          {userData.map((user) => (
            <React.Fragment key={user.userid}>
              {user.articles.length > 0 ? (
                user.articles.map((article) => (
                  <Grid item key={article.id} xs={12} sm={6}>
                    <Card
                      variant="outlined"
                      sx={{ backgroundColor: "#ececec", p: 2, height: "100%" }}
                    >
                      <Typography variant="h6">{user.uname}</Typography>
                      <Typography variant="h6">{article.title}</Typography>
                      <Typography>{article.content}</Typography>
                      <Typography>
                        Published on: {article.publishedDate}
                      </Typography>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12} sm={6}>
                  <Card
                    variant="outlined"
                    sx={{ backgroundColor: "#ececec", p: 2, height: "100%" }}
                  >
                    <Typography variant="h6">{user.uname}</Typography>
                    <Typography variant="body1">No articles to display.</Typography>
                  </Card>
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Typography variant="h5">No users to display.</Typography>
        </Grid>
      )}
    </div>
  );
};

export default Feed;
