
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #ffcccc, #ff6666)", // Red Gradient
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Container>
        {/* Page Title */}
        <h2 className="text-center fw-bold mb-4" style={{ color: "#8B0000" }}>
          📍 संपर्क करें - Contact Us 📍
        </h2>

        <Row className="g-4">
          {/* Address & Contact */}
          <Col md={6}>
            <Card className="shadow p-4 text-center border-0">
              <h4 className="fw-bold" style={{ color: "#8B0000" }}>🏡 पता (Address)</h4>
              <p className="fs-5">मढ़िया माता मंदिर, मेख, जिला नरसिंहपुर, मध्य प्रदेश</p>

              <h4 className="fw-bold" style={{ color: "#8B0000" }}>📞 संपर्क (Contact)</h4>
              <p className="fs-5">
                <FaPhone color="green" /> <b>+91 98765 43210</b> <br />
                <FaPhone color="green" /> <b>+91 91234 56789</b>
              </p>

              <h4 className="fw-bold" style={{ color: "#8B0000" }}>📸 Instagram</h4>
              <p className="fs-5">
                <FaInstagram color="#C13584" /> 
                <a href="https://www.instagram.com/your_instagram_id" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#C13584" }}>
                  @your_instagram_id
                </a>
              </p>

              <h4 className="fw-bold" style={{ color: "#8B0000" }}>💬 WhatsApp</h4>
              <p className="fs-5">
                <FaWhatsapp color="green" /> 
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "green" }}>
                  Chat on WhatsApp
                </a>
              </p>
            </Card>
          </Col>

          {/* Google Map Embed */}
          <Col md={6}>
            <Card className="shadow border-0">
              <iframe
              // <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                title="Temple Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.216673503929!2d79.37296445!3d22.979058549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397f807db4782a4f%3A0x27ded1da01c77ddc!2sMekh%2C%20Madhya%20Pradesh%20487114!5e0!3m2!1sen!2sin!4v1740564516912!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
