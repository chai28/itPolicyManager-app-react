import React from "react";
import { Link } from "react-router-dom";

// nodejs library that concatenates strings
// import classnames from "classnames";

// reactstrap components
import {
  // Collapse,
  NavbarBrand,
  Navbar,
  // NavItem,
  // NavLink,
  // Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  // const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  // const toggleNavbarCollapse = () => {
  //   setNavbarCollapse(!navbarCollapse);
  //   document.documentElement.classList.toggle("nav-open");
  // };
  
  return (
    <Navbar
      className="fixed-top"
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/LandingPage"
            target="_blank"
            title="Coded by Charity"
            tag={Link}
          >
            IT Policy Manager Subscription
          </NavbarBrand>
        </div>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
