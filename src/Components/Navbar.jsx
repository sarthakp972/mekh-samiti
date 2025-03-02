import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";

function MataJiNavbar() {
  const location = useLocation(); // Get current route
  const [expanded, setExpanded] = useState(false); // Navbar state

  // 🎨 Active link styles
  const activeStyle = {
    fontWeight: "bold",
    color: "yellow",
    borderBottom: "2px solid yellow",
  };

  // 🔔 Notice Highlight Styles (as a JS object)
  const [noticeStyle, setNoticeStyle] = useState({
    backgroundColor: "yellow",
    color: "red",
    fontWeight: "bold",
    fontSize: "10px", // Adjusted font size
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.8)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "background-color 0.5s, transform 0.5s",
  });

  // 🔄 Animation Effect: Blinking & Pulsing
  useEffect(() => {
    const interval = setInterval(() => {
      setNoticeStyle((prevStyle) => ({
        ...prevStyle,
        backgroundColor: prevStyle.backgroundColor === "yellow" ? "orange" : "yellow",
        transform: prevStyle.transform === "scale(1)" ? "scale(1.1)" : "scale(1)",
      }));
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      style={{ backgroundColor: "#D32F2F" }}
      variant="dark"
      expanded={expanded} // Control expanded state
    >
      <Container>
        {/* 🔥 Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)} // Close toggle on click
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "#FFD700",
            textShadow: "1px 1px 5px rgba(255, 215, 0, 0.8)",
            fontFamily: "'Pattaya', sans-serif",
            letterSpacing: "0.5px",
            padding: "5px 10px",
            borderRadius: "5px",
            background: "linear-gradient(to right, #8B0000, #FF4500)",
            boxShadow: "0px 0px 10px rgba(255, 140, 0, 0.5)",
          }}
        >
          माँ खेरापति
        </Navbar.Brand>

        {/* 🔥📢 Highly Highlighted Notice Link 📢🔥 */}
        <Navbar.Brand as={Link} to="/notice" style={noticeStyle} onClick={() => setExpanded(false)}>
          🔥📢 NOTICE 📢🔥
        </Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)} // Toggle open/close
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={location.pathname === "/" ? activeStyle : { color: "white" }}
              onClick={() => setExpanded(false)} // Close on click
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={location.pathname === "/about" ? activeStyle : { color: "white" }}
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/gallery"
              style={location.pathname === "/gallery" ? activeStyle : { color: "white" }}
              onClick={() => setExpanded(false)}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              style={location.pathname === "/contact" ? activeStyle : { color: "white" }}
              onClick={() => setExpanded(false)}
            >
              Contact Us
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link
              as={Link}
              to="/donation"
              style={location.pathname === "/donation" ? activeStyle : { color: "white" }}
              onClick={() => setExpanded(false)}
            >
              दान करें (Donate Now)
            </Nav.Link>

            <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/aartiya"
                style={location.pathname === "/aartiya" ? activeStyle : {}}
                onClick={() => setExpanded(false)}
              >
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
