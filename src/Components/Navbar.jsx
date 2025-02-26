import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css"; // Import your CSS file

function MataJiNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" style={{ backgroundColor: "#D32F2F" }} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "#FFD700", fontWeight: "bold" }}>
          KheraPati-Mata 
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="text-white">
              Photos
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/donation" className="donation-text">
            दान करें (Donate Now)
            </Nav.Link>
            <NavDropdown title="More" id="collapsible-nav-dropdown">
             
              <NavDropdown.Item as={Link} to="/aartiya">
              आरती संग्रह 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MataJiNavbar;
