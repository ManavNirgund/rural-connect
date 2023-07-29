import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  if (!isAuthenticated) {
    console.log(`Avoided user access using private routes: ${isAuthenticated}`);
    // toast message
    toast("please log in")

    return (
      <>
        <Navigate to="/login" state={{ path: location.pathname }} />
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default RequireAuth;
