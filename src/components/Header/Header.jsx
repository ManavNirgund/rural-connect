import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { CommunityDropdown, newsDropdown } from "../../assets/data/enums";
import { CircularProgress, Typography } from "@mui/material";
import "./Header.css";

import ruralconnect from "../../assets/images/logo/svg/RuralConnect.svg";
import award from "../../assets/images/award.svg";
import trophy from "../../assets/images/trophy.gif";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [selectedItemNews, setSelectedItemNews] = useState("");
  const [selectedItemCom, setSelectedItemCom] = useState("");

  const [isNotifyDisabled, setIsNotifyDisabled] = useState(true);
  const [isLogoutDisabled, setIsLogoutDisabled] = useState(true);

  const [name, setName] = useState("");
  const [bonusPoints, setBonusPoints] = useState("");

  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const userid = localStorage.getItem("email");
    setIsLogoutDisabled(true);
    console.log(userid);
    if (userid != null) {
      axios.get(`http://localhost:8080/users/${userid}`).then((res) => {
        console.log(res.data);
        setName(res.data.uname);
        setBonusPoints(res.data.bonus_points);
      });
    }
  }, []);

  const notify = () => {
    const userid = localStorage.getItem("email");
    setIsNotifyDisabled(false);
    axios
      .get(`http://localhost:8080/notify/${userid}`)
      .then((res) => {
        console.log("Notification sent successfully");
        alert(res.data);
        setIsNotifyDisabled(true);
      })
      .catch((err) => {
        console.log(err);
        alert(err.name);
        setIsNotifyDisabled(true);
      });
  };

  const logout = () => {
    localStorage.setItem("isAuthenticated", false);
    localStorage.removeItem("email");
    setIsLogoutDisabled(false);
    axios
      .get("http://localhost:8080/logout")
      .then((res) => {
        console.log(res.data);
        console.log(`logged out: ${isAuthenticated}`);
        setShowNav(false);
        setIsLogoutDisabled(true);
      })
      .catch((err) => {
        alert(`${err.name}: ${err.message}`);
        setIsLogoutDisabled(true);
      });
  };

  return (
    <MDBNavbar expand="lg" light style={{ backgroundColor: "#75B59E" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <Link to="/">
            <img
              src={ruralconnect}
              alt="Site Logo"
              width="100vw"
              style={{ marginBottom: "-0.5rem" }}
            />
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleNav} className="custom-navbar-toggler">
          <i className="fas fa-bars"></i>
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className="w-100 flex-grow-1 align-items-center">
            <MDBNavbarItem>
              <MDBNavbarLink href="#">
                <Link to="/" style={{ color: "black" }}>
                  Home
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="nav-link" style={{ color: "black" }}>
                <Link to="/forecast" style={{ color: "black" }}>
                  Weather
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="nav-link"
                  role="button"
                  style={{ color: "black" }}
                >
                  {selectedItemNews ? selectedItemNews.name : "News"}
                </MDBDropdownToggle>
                <MDBDropdownMenu
                  style={{
                    borderRadius: "5px",
                  }}
                  className={showNav ? "center-dropdown" : ""}
                >
                  {newsDropdown.map((item) => {
                    return (
                      <MDBDropdownItem
                        key={item.id}
                        style={{
                          marginTop: "5px",
                          marginLeft: "5px",
                          marginRight: "5px",
                          borderBottom: "1px solid gray",
                        }}
                        onClick={() => setSelectedItemNews(item)}
                      >
                        <Link to={item.to} style={{ color: "black" }}>
                          {item.name}
                        </Link>
                      </MDBDropdownItem>
                    );
                  })}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="nav-link"
                  role="button"
                  style={{ color: "black" }}
                >
                  {selectedItemCom ? selectedItemCom.name : "Community"}
                </MDBDropdownToggle>
                <MDBDropdownMenu
                  style={{
                    borderRadius: "5px",
                  }}
                  className={showNav ? "center-dropdown" : ""}
                >
                  {CommunityDropdown.map((item) => {
                    return (
                      <MDBDropdownItem
                        key={item.id}
                        style={{
                          marginTop: "5px",
                          marginLeft: "5px",
                          marginRight: "5px",
                          borderBottom: "1px solid gray",
                        }}
                        onClick={() => setSelectedItemCom(item)}
                      >
                        <Link
                          to={item.to}
                          style={{ color: "black" }}
                          onClick={() => setShowNav(false)}
                        >
                          {item.name}
                        </Link>
                      </MDBDropdownItem>
                    );
                  })}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              {isNotifyDisabled ? (
                <MDBNavbarLink
                  href="#"
                  onClick={notify}
                  className="nav-link"
                  style={{ color: "black" }}
                  disabled={isNotifyDisabled}
                >
                  Notify
                </MDBNavbarLink>
              ) : (
                <CircularProgress size={20} color="primary" />
              )}
            </MDBNavbarItem>
            {isAuthenticated && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  maxWidth: "fit-content",
                  marginLeft: "2vw",
                }}
                className="rainbow-border"
              >
                <img
                  src={trophy}
                  style={{ marginLeft: "1vw", marginRight: "1vw" }}
                  alt="Points: "
                  height="50px"
                />
                <Typography variant="h6" fontWeight="bold" marginRight="1vw" color="gold"> = </Typography>
                <MDBNavbarItem>
                  <Typography
                    variant="h6"
                    color="gold"
                    fontWeight="bold"
                    sx={{
                      marginRight: "1vw",
                    }}
                  >{`${bonusPoints}`}</Typography>
                </MDBNavbarItem>
              </div>
            )}
          </MDBNavbarNav>
          <MDBNavbarNav className="justify-content-center">
            <MDBNavbarItem>
              <div className="d-flex">
                {!isAuthenticated && (
                  <>
                    <MDBBtn
                      color="secondary"
                      className="me-4"
                      style={{ boxShadow: "none" }}
                    >
                      <Link
                        to="/login"
                        style={{ color: "black" }}
                        onClick={() => setShowNav(false)}
                      >
                        Login
                      </Link>
                    </MDBBtn>
                    <MDBBtn color="secondary" style={{ boxShadow: "none" }}>
                      <Link
                        to="/register"
                        style={{ color: "black" }}
                        onClick={() => setShowNav(false)}
                      >
                        Register
                      </Link>
                    </MDBBtn>
                  </>
                )}

                {isAuthenticated && (
                  <MDBBtn
                    color="secondary"
                    style={{ boxShadow: "none" }}
                    onClick={logout}
                  >
                    {isLogoutDisabled ? (
                      <Link to="/login" style={{ color: "black" }}>
                        Logout
                      </Link>
                    ) : (
                      <CircularProgress />
                    )}
                  </MDBBtn>
                )}
              </div>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
