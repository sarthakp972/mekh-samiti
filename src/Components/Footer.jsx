import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaMapMarkerAlt, FaPhone, FaHandHoldingHeart, FaLaptopCode } from "react-icons/fa";
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
            <p>
              <FaPhone /> संपर्क करें: 📞 8305388489 📞 7974039009 📞 6267829130
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">🔗 महत्वपूर्ण लिंक</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">🏠 होम</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">ℹ️ समिति के बारे में</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">📞 संपर्क करें</Link></li>
              <li><Link to="/aartiya" className="text-white text-decoration-none">🛕 माँ की आरती</Link></li>
              <li><Link to="/gallery" className="text-white text-decoration-none">📸 गैलरी</Link></li>
              <li><Link to="/donation" className="text-white text-decoration-none">💰 दान करें</Link></li>
            </ul>
          </Col>

          {/* Social Media & Donate */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">📲 हमें फॉलो करें</h5>
            <p className="mb-1">
              <FaInstagram size={25} color="#E4405F" className="me-2" />
              <a href="https://www.instagram.com/mekh_ki_maharani?igsh=MTg1YXM4YWExMmgzNw%3D%3D" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
            <button className="btn btn-warning fw-bold mt-2">
              <FaHandHoldingHeart /> <Link to="/donation" className="text-dark text-decoration-none">दान करें</Link>
            </button>
          </Col>
        </Row>

        {/* Copyright Section */}
        <hr className="bg-light" />
        <p className="text-center mb-2">© {new Date().getFullYear()} माँ खेरापति नव दुर्गा समिति मेख | सभी अधिकार सुरक्षित</p>

        {/* 🌟 Subtle Advertisement Section */}
        <div className="text-center mt-3" style={{ 
          backgroundColor: "#333", 
          color: "#FFD700", 
          padding: "8px", 
          borderRadius: "5px", 
          fontSize: "14px"
        }}>
          <p className="mb-1" style={{ margin: 0 }}>
            <FaLaptopCode size={18} className="me-1" />
            **वेबसाइट बनवाने के लिए संपर्क करें : सार्थक पटवा : 📞मोबाइल नंबर - 7649062706
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
