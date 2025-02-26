// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaHandHoldingHeart } from "react-icons/fa";
 import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ background: "#8B0000", color: "white", padding: "30px 0" }}>
      <Container>
        <Row className="text-center text-md-start">
          
          {/* Samiti Info */}
          <Col md={4} className="mb-4">
            <h4 className="fw-bold">🙏 माँ खेरापति नव दुर्गा समिति मेख</h4>
            <p className="mb-1">
              <FaMapMarkerAlt /> ग्राम - मेख, जिला - नरसिंहपुर, मध्य प्रदेश
            </p>
            <p><FaPhone /> संपर्क करें: +91 98765 43210</p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">🔗 महत्वपूर्ण लिंक</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">🏠 होम</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">ℹ️ समिति के बारे में</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">📞 संपर्क करें</Link></li>
              <li><Link  className="text-white text-decoration-none">💰 दान करें</Link></li>
            </ul>
          </Col>

          {/* Social Media & Donate */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">📲 हमें फॉलो करें</h5>
            <p className="mb-1">
              <FaWhatsapp size={25} color="#25D366" className="me-2" />
              <a href="https://wa.me/919876543210" className="text-white text-decoration-none">WhatsApp</a>
            </p>
            <p className="mb-1">
              <FaInstagram size={25} color="#E4405F" className="me-2" />
              <a href="https://instagram.com/samiti" className="text-white text-decoration-none">Instagram</a>
            </p>
            <p>
              <FaFacebook size={25} color="#3b5998" className="me-2" />
              <a href="https://facebook.com/samiti" className="text-white text-decoration-none">Facebook</a>
            </p>
            <button className="btn btn-warning fw-bold mt-2">
              <FaHandHoldingHeart /> <Link to="/donation" className="text-dark text-decoration-none">दान करें</Link>
            </button>
          </Col>
        </Row>

        {/* Copyright Section */}
        <hr className="bg-light" />
        <p className="text-center mb-0">© {new Date().getFullYear()} माँ खेरापति नव दुर्गा समिति मेख | सभी अधिकार सुरक्षित</p>
      </Container>
    </footer>
  );
};

export default Footer;
