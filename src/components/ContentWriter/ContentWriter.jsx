import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userid = localStorage.getItem("email");

    const postData = {
      title: "This is title",
      content: content,
      author: userData,
      publishedDate: "2023-07-25T12:34:56",
    };

    const queryString = new URLSearchParams({
      userid: "snehaapramod@gmail.com",
      pwd: "123456",
    }).toString();

    axios
      .post(`http://localhost:8080/create-article?${queryString}`, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(`${res.data}`);
      });
  };

  return (
    <div>
      <div className="content">
        <div className="jumbotron">
          <img src={"../images/man-593333_1280.jpg"} alt="Jumbotron" />
          <div className="overlay"></div>
          <h2>Content Writer</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            rows="10"
            cols="50"
            value={content}
            name="content"
            onChange={handleChange}
            placeholder="Write your content here..."
          />
          <div>
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContentWriter;
