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
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import ruralconnect from "../../assets/images/logo/svg/RuralConnect.svg";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated"))
  );

  useEffect(() => {
    const handleAuthenticationChange = () => {
      setIsAuthenticated(JSON.parse(localStorage.getItem("isAuthenticated")));
    };

    // Listen for changes to 'isAuthenticated' in localStorage
    window.addEventListener("storage", handleAuthenticationChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleAuthenticationChange);
    };
  }, []);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <MDBNavbar expand="lg" light style={{ backgroundColor: "#75B59E" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img
            src={ruralconnect}
            alt="Site Logo"
            width="100vw"
            style={{ marginBottom: "-0.5rem" }}
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleNav} />
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className="mr-auto">
            <MDBNavbarItem>
              <MDBNavbarLink href="#" style={{ color: "black" }}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/forecast" className="nav-link" style={{ color: "black" }}>
                Weather
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#" style={{ color: "black" }}>
                News
              </MDBNavbarLink>
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
                    <Link to="/">Logout</Link>
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
                    <Link to="/">Login</Link>
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