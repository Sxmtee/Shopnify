import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import CompoundMenu from "./compound_menu";
import SearchBox from "./search_box";

const Header = () => {
  const openAccount = () => {
    // open modal
  };

  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container>
          <Link className="navbar-brand logo" to="/">
            Shopnify
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-end align-items-center">
              <Link className="nav-link active me-3" to="/">
                Home
              </Link>
              <Link className="nav-link me-3" to="/shop">
                Shop
              </Link>
              <CompoundMenu onClickMenu={openAccount} isCart={false}>
                <div className="ms-2 me-4">
                  <small className="text-muted text-capitalize">sign-in</small>
                  <div className="mt-0">
                    <small className="fw-bold text-capitalize">
                      my account
                    </small>
                  </div>
                </div>
              </CompoundMenu>
              <CompoundMenu onClickMenu={() => {}} isCart={true} noItem={0}>
                <Link to="/cart" className="text-decoration-none">
                  <small className="text-muted text-capitalize ms-2">
                    my cart
                  </small>
                </Link>
                <NavDropdown title={"₦1,000"} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </CompoundMenu>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SearchBox />
    </>
  );
};

export default Header;
