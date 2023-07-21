import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useRequireAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);
  const nav = useNavigate();

  const login = () => {
    // setUserID(userid);
    // setPassword(pwd);
    setIsAuthenticated(true);
  };

  const logout = () => {
  //   setUserID("");
  //   setPassword("");
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
