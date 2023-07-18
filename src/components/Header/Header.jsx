import React from "react";
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
import ruralconnect from "../../assets/images/logo/svg/RuralConnect.svg"

const NavBar = () => {
  const [showNav, setShowNav] = React.useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <MDBNavbar expand="lg" light style={{ backgroundColor: "#75B59E" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src={ruralconnect} width="100vw" style={{marginBottom: "-0.5rem"}}/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleNav} />
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className="mr-auto">
            <MDBNavbarItem>
              <MDBNavbarLink href="#" style={{color: "black"}}>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#" style={{color: "black"}}>Weather</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#" style={{color: "black"}}>News</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav className="ml-auto">
            <MDBNavbarItem>
              <MDBBtn color="secondary" className="me-4" style={{boxShadow: 'none'}}>
                <Link to="/">Login</Link>
              </MDBBtn>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBBtn color="secondary" style={{boxShadow: 'none'}}>
                <Link to="/register">Register</Link>
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
