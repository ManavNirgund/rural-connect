import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

  if (!isAuthenticated) {
    alert("Please Login");
    console.log(`Avoided user access using private routes: ${isAuthenticated}`);
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  if (!isAdmin) {
    alert("This feature is only available to administrators");
    console.log(`Avoided admin access using private routes: ${isAdmin}`);
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};

export default Private;
