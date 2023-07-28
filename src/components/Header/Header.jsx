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
import ruralconnect from "../../assets/images/logo/svg/RuralConnect.svg";
import axios from "axios";
import { CommunityDropdown, newsDropdown } from "../../assets/data/enums";
import { CircularProgress, Typography } from "@mui/material";
import "./Header.css";
import { ConstructionOutlined } from "@mui/icons-material";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [selectedItemNews, setSelectedItemNews] = useState("");
  const [selectedItemCom, setSelectedItemCom] = useState("");

  const [isNotifyDisabled, setIsNotifyDisabled] = useState(true);
  const [isLogoutDisabled, setIsLogoutDisabled] = useState(false);

  const [bonusPoints, setBonusPoints] = useState("");

  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const userid = localStorage.getItem("email");
    axios.get(`http://localhost:8080/users/${userid}`).then((res) => {
      console.log(res.data);
      setBonusPoints(res.data.bonus_points);
    });
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
    axios.get("http://localhost:8080/logout").then((res) => {
      console.log(res.data);
      console.log(`logged out: ${isAuthenticated}`);
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
          <MDBNavbarNav className="w-100 flex-grow-1 justify-content">
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
                <MDBDropdownMenu style={{ borderRadius: "5px" }}>
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
                <MDBDropdownMenu>
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
              {isNotifyDisabled ? (
                <MDBNavbarLink
                  href="#"
                  onClick={notify}
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Notify
                </MDBNavbarLink>
              ) : (
                <CircularProgress size={20} color="primary" />
              )}
            </MDBNavbarItem>
            <MDBNavbarItem>
              {bonusPoints && (
                <Typography
                  variant="h6"
                  color="black"
                >{`Points ${bonusPoints}`}</Typography>
              )}
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav className="justify-content-center">
            <MDBNavbarItem>
              <div className="d-flex">
                {isAuthenticated && (
                  <MDBBtn
                    color="secondary"
                    style={{ boxShadow: "none" }}
                    disabled={isLogoutDisabled}
                    onClick={logout}
                  >
                    <Link to="/login" style={{ color: "black" }}>
                      Logout
                    </Link>
                  </MDBBtn>
                )}
                {!isAuthenticated && (
                  <>
                    <MDBBtn
                      color="secondary"
                      className="me-4"
                      style={{ boxShadow: "none" }}
                    >
                      <Link to="/login" style={{ color: "black" }}>
                        Login
                      </Link>
                    </MDBBtn>
                    <MDBBtn color="secondary" style={{ boxShadow: "none" }}>
                      <Link to="/register" style={{ color: "black" }}>
                        Register
                      </Link>
                    </MDBBtn>
                  </>
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
