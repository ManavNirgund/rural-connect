import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  if (!isAuthenticated) {
    console.log(`Avoided user access using private routes: ${isAuthenticated}`);
    alert(
      "You must be logged in to view this page. Please log in or register if you don't have an account yet!"
    );
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
