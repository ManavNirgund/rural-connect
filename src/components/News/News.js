// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '../Style/News.css';

// const News = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const API_KEY = '0d3a2f07e77443c291a86b824d47cf6f';
//     const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

//     axios
//       .get(API_URL)
//       .then((response) => {
//         setNews(response.data.articles);
//       })
//       .catch((error) => {
//         console.error('Error fetching news:', error);
//       });
//   }, []);

//   // Function to chunk the news into rows of 4 cards
//   const chunkArray = (arr, size) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//       result.push(arr.slice(i, i + size));
//     }
//     return result;
//   };

//   const chunkedNews = chunkArray(news, 4);

//   return (
//     <div>
//       <div className="sidebar">
//         <h2>Dashboard</h2>
//         <Link to="/home">Home</Link>
//         <Link to="/weatherInfo">Current Weather</Link>
//         <Link to="/forecast">Forecast</Link>
//         <Link to="/now/weather">Search for Other Country</Link>
//         <Link to="/weather/weekly">Other Country Weekly Data</Link>
//         <Link to="/news">News</Link>
//         <Link to="/">Logout</Link>
//       </div>

//       <div className="content">
//         <div className="jumbotron">
//           <img
//             src={
//               '../images/sunset-sea-ocean-sandy-beach-waves-red-sky-clouds-summer-landscape-wallpaper-for-desktop-3840×2400-wallpaper-preview.jpg'
//             }
//             alt="Jumbotron"
//           />
//           <div className="overlay"></div>
//           <h2>Latest News</h2>
//         </div>

//         {chunkedNews.map((row, rowIndex) => (
//           <div key={rowIndex} className="card-row">
//             {row.map((article, index) => (
//               <div key={index} className="card">
//                 <img src={article.urlToImage} alt={article.title} />
//                 <div className="card-body">
//                   <h3>{article.title}</h3>
//                   <p>{article.description}</p>
//                   <a href={article.url} target="_blank" rel="noopener noreferrer">
//                     Read more
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./News.css";
import { Card, Grid, Typography } from "@mui/material";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const API_KEY = "acbd789b603b4c30b65b99e4114f0da0"; // Mine
    // const API_KEY = "0d3a2f07e77443c291a86b824d47cf6f";
    // const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const API_URL = `https://newsapi.org/v2/everything`;

    axios
      .get(API_URL, {
        params: {
          q: "agriculture",
          apiKey: API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data);
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div>
      <div className="content">
        {/* Jumbotron */}
        <div className="jumbotron">
          <img
            src={
              "https://www.aeologic.com/blog/wp-content/uploads/2022/11/Importance-of-Modern-Technology-In-Agriculture-Industry-1180x664.png"
            }
            alt="Jumbotron"
          />
          <div className="overlay"></div>
          <h2>Latest News</h2>
        </div>

        <Grid container spacing={5} marginTop="1rem">
          {news.map((article, index) => {
            const dateObj = new Date(article.publishedAt);
            const localTime = dateObj.toLocaleString();
            // const year = dateObj.getFullYear();
            // const month = String(dateObj.getMonth() + 1).padStart(2, "0");
            // const day = String(dateObj.getDate()).padStart(2, "0");

            return (
              <Grid item key={index} xs={12} sm={4}>
                <Card sx={{ height: "100%", backgroundColor: "#ececec" }}>
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}

                  <Typography variant="h4">{article.title}</Typography>
                  <Typography>{`Source: ${article.source.name}`}</Typography>
                  <Typography>{`Published at: ${localTime}`}</Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default News;
