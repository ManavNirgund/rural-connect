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
import { newsDropdown } from "../../assets/data/enums";
import { CircularProgress } from "@mui/material";
import "./Header.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const [isNotifyDisabled, setIsNotifyDisabled] = useState(true);
  const [isLogoutDisabled, setIsLogoutDisabled] = useState(true);

  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const notify = () => {
    const email = localStorage.getItem("email");
    setIsNotifyDisabled(false);
    axios
      .get(`http://localhost:8080/notify/${email}`)
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
          <MDBNavbarNav className="mr-auto">
            <MDBNavbarItem>
              <MDBNavbarLink href="#" style={{ color: "black" }}>
                Home
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
              <MDBNavbarLink className="nav-link" style={{ color: "black" }}>
                {isNotifyDisabled ? (
                  <a href="#" onClick={notify} style={{ color: "black" }}>
                    Notify
                  </a>
                ) : (
                  <CircularProgress size={20} color="primary" />
                )}
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* News */}
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="nav-link"
                  role="button"
                  style={{ color: "black" }}
                >
                  {selectedItem ? selectedItem.name : "News"}
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
                        onClick={() => setSelectedItem(item)}
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
          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex align-items-center">
            <div className="flex-grow-1">
              {isAuthenticated && (
                <MDBNavbarItem>
                  <MDBBtn
                    color="secondary"
                    style={{ boxShadow: "none" }}
                    onClick={() => {
                      localStorage.setItem("isAuthenticated", false);
                      console.log(`logged out: ${isAuthenticated}`);
                    }}
                  >
                    <Link to="/login">Logout</Link>
                  </MDBBtn>
                </MDBNavbarItem>
              )}
            </div>
            {!isAuthenticated && (
              <>
                <MDBNavbarItem>
                  <MDBBtn
                    color="secondary"
                    className="me-4"
                    style={{ boxShadow: "none" }}
                  >
                    <Link to="/login">Login</Link>
                  </MDBBtn>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBBtn color="secondary" style={{ boxShadow: "none" }}>
                    <Link to="/register">Register</Link>
                  </MDBBtn>
                </MDBNavbarItem>
              </>
            )}

            {/* {isAuthenticated == true && (
              <MDBNavbarItem>
                <MDBBtn
                  color="secondary"
                  style={{ boxShadow: "none" }}
                  onClick={() => {
                    localStorage.setItem("isAuthenticated", false);
                    console.log(`logged out: ${isAuthenticated}`);
                  }}
                >
                  <Link to="/">Logout</Link>
                </MDBBtn>
              </MDBNavbarItem>
            )} */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
