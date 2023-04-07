import { useContext, useState } from "react";
import { Button, Form, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { TiShoppingCart } from "react-icons/ti";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const getValue = useContext(AppContext);

  const [searchElement, setSearchElement] = useState("");

  const handleLogout = () => {
    getValue.logOut();
    sessionStorage.removeItem("token");
    // Redirect to the login page
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/productsearch", {
      state: {
        name: searchElement,
      },
    });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>MediCare</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-links">
                <p>Home</p>
              </Link>

              <Link to="/products" className="nav-links">
                <p>Products</p>
              </Link>

              <NavDropdown
                title="Health"
                id="basic-nav-dropdown"
                className="nav-links-dropdown"
              >
                <Link to="/appointments" className="nav-dropdown-links">
                  Appointments
                </Link>

                <Link to="/healthcaretest" className="nav-dropdown-links">
                  Check up
                </Link>

                <Link to="/wellness" className="nav-dropdown-links">
                  Wellness
                </Link>

                <Link to="/healthconcern" className="nav-dropdown-links">
                  Health Concerns
                </Link>
              </NavDropdown>

              <Link to="/contact" className="nav-links">
                Contact Us
              </Link>

              {getValue.userType === "admin" ? (
                <Link to="/addproduct" className="nav-links">
                  Add Product
                </Link>
              ) : null}
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  setSearchElement(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <Button variant="outline-primary" onClick={handleSearch}>
                Search
              </Button>
            </Form>

            <Nav>
              <Link to="/signup" className="nav-links-right">
                Sign Up
              </Link>
            </Nav>

            <Nav>
              {getValue.userType === "" || getValue.userType === undefined ? (
                <Link to="/login" className="nav-links-right">
                  Log In
                </Link>
              ) : (
                <p
                  className="nav-links-right text-light"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  Log Out
                </p>
              )}
            </Nav>

            <Nav>
              <Link to="/cart" className="nav-links-right">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <TiShoppingCart style={{ height: 25, width: 30 }} />
                  Cart
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
