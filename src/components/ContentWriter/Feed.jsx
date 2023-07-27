import { Email } from "@mui/icons-material";
import { Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Feed = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userid = localStorage.getItem("email");
    axios
      .get(`http://localhost:8080/users`)
      .then((res) => {
        console.log(res.data);
        let userObjects = res.data;
        let admin = userObjects.shift();
        console.log(userObjects);
        setUserData(userObjects);
      })
      .catch((err) => {
        toast.error(`${err.name}: ${err.message}`);
      });
  }, []);

  //   return (
  //     <Grid container spacing={5} marginTop="1rem">
  //       {/* Conditional rendering to show articles or a message */}
  //       {userData ? (
  //         userData.map((user) => (
  //           <Grid item key={user.articles.id} xs={12} sm={4}>
  //             <Card sx={{ backgroundColor: "#ececec" }}>
  //               <Typography>{user.uname}</Typography>
  //               <h4>{user.articles.title}</h4>
  //               <p>{user.content}</p>
  //               <p>Published on: {user.articles.publishedDate}</p>
  //             </Card>
  //           </Grid>
  //         ))
  //       ) : (
  //         <h1>No articles to display.</h1>
  //       )}
  //     </Grid>
  //   );

  return (
    <div>
      {/* Conditional rendering to show articles or a message */}
      {userData.length > 0 ? (
        userData.map((user) => (
          <Grid item key={user.userid} xs={12} sm={6} md={4}>
            <Card
              variant="outlined"
              sx={{ backgroundColor: "#ececec", p: 2, height: "100%" }}
            >
              <Typography variant="h6">{user.uname}</Typography>
              {user.articles.length > 0 ? (
                user.articles.map((article) => (
                  <div key={article.id}>
                    <Typography variant="h6">{article.title}</Typography>
                    <Typography>{article.content}</Typography>
                    <Typography>
                      Published on: {article.publishedDate}
                    </Typography>
                  </div>
                ))
              ) : (
                <Typography variant="body1">No articles to display.</Typography>
              )}
            </Card>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h5">No users to display.</Typography>
        </Grid>
      )}
    </div>
  );
};

export default Feed;
