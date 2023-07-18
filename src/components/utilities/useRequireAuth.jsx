import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";

function useRequireAuth() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const nav = useNavigate();

  const login = (userid, pwd) => {
    setUserID(userid);
    setPassword(pwd);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUserID("");
    setPassword("");
    setIsAuthenticated(false);
    nav("/login");
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
}

export default useRequireAuth;
