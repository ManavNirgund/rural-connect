import React from 'react';
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdb-react-ui-kit';

const Header = () => {
  const [showNav, setShowNav] = React.useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer>
        <MDBNavbarBrand href='/'>Navbar Brand</MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleNav} />

        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className='mr-auto'>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Products</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Login</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Logout</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;