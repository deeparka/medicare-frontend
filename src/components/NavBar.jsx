import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { TiShoppingCart } from "react-icons/ti";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const getValue = useContext(AppContext);

  const handleLogout = () => {
    getValue.logOut();
    sessionStorage.removeItem("token");
    // Redirect to the login page or home page
    navigate("/login");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
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
