import { Button, Form, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { TiShoppingCart } from "react-icons/ti";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>MediCare</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <NavDropdown title="Health" id="basic-nav-dropdown">
                <NavDropdown.Item href="/appointments">
                  Appointments
                </NavDropdown.Item>
                <NavDropdown.Item href="/wellness">
                  Wellness
                </NavDropdown.Item>
                <NavDropdown.Item href="/healthconcern">
                  Health Concerns
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/addproduct">Add Product</Nav.Link>
            </Nav>

            <Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link href="signup">Sign Up</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Log In</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/cart">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <TiShoppingCart style={{ height: 25, width: 30 }} />
                  Cart
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
