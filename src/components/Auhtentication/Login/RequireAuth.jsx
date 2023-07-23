import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import NoAuthToast from "../../Toasts/NoAuthToast";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  if (!isAuthenticated) {
    console.log(`Avoided user access using private routes: ${isAuthenticated}`);
    <NoAuthToast />;
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
