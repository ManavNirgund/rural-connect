import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  if (!isAuthenticated) {
    alert("This feature is only available to administrators");
    console.log(`Avoided access using private routes: ${isAuthenticated}`);
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }

  return children;
};

export default Private;
