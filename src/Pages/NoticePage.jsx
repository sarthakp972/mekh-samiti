// import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NoticePage() {
  // Sample Notices (You can update these dynamically)
  const notices = [
    { time: "⏰ 12:00 PM", event: "भंडारा प्रारंभ", location: "मढ़िया परिसर" },
    { time: "🕯️ 02:00 PM", event: "माँ की आरती", location: "मुख्य मंदिर" },
    { time: "🎶 03:00 PM", event: "भजन-कीर्तन", location: "भजन मंडली मंच" },
    { time: "🚩 05:00 PM", event: "शोभायात्रा", location: "ग्राम मुख्य चौक" },
  ];

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
        <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#8B0000", // Dark Red
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          🔔 माँ खेरापति नव दुर्गा महोत्सव - सूचना पृष्ठ 🔔
        </h2>

        {/* Notices Section */}
        <Row className="justify-content-center">
          {notices.map((notice, index) => (
            <Col md={6} sm={12} key={index} className="mb-4">
              <Card
                className="text-center shadow"
                style={{
                  background: "rgba(255, 230, 230, 0.9)", // Light Red Transparent
                  border: "3px solid #8B0000",
                  borderRadius: "15px",
                  padding: "15px",
                }}
              >
                <Card.Body>
                  <h5
                    className="fw-bold"
                    style={{ color: "#8B0000", fontSize: "20px" }}
                  >
                    {notice.event}
                  </h5>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#660000",
                    }}
                  >
                    📍 स्थान: {notice.location} <br />
                    {notice.time}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Contact Information */}
        <div className="text-center mt-5">
          <h5 className="fw-bold" style={{ color: "#8B0000" }}>
            किसी भी जानकारी के लिए संपर्क करें:
          </h5>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#660000",
            }}
          >
            📞 +91 98765 43210 <br />
            📞 +91 91234 56789
          </p>
        </div>
      </Container>
    </div>
  );
}

export default NoticePage;
