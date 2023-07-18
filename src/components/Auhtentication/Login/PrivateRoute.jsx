import React from "react";
import useRequireAuth from "../../utilities/useRequireAuth";
import { useNavigate } from "react-router-dom";

const Private = ({ children }) => {
  const nav = useNavigate();

  const { isAuthenticated } = useRequireAuth();

  if (!isAuthenticated) {
    {
      nav("/allusers");
    }
  }
  return children;
};

export default Private;
