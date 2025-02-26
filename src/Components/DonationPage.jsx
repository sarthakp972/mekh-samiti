
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DonationPage() {
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
          🙏 माँ खेरापति नव दुर्गा महोत्सव - दान पृष्ठ 🙏
        </h2>

        {/* Donation Section */}
        <Row className="justify-content-center">
          <Col md={8} sm={12}>
            <Card
              className="text-center shadow p-4"
              style={{
                background: "rgba(255, 230, 230, 0.9)", // Light Red Transparent
                border: "4px solid #8B0000",
                borderRadius: "15px",
              }}
            >
              <Card.Body>
                <h4
                  style={{
                    color: "#8B0000",
                    fontWeight: "bold",
                  }}
                >
                  आपका सहयोग हमारी आस्था को और मजबूत करेगा!  
                </h4>
                <p style={{ color: "#660000", fontSize: "18px" }}>
                  माँ खेरापति नव दुर्गा महोत्सव में दान देकर पुण्य अर्जित करें।
                  आपका योगदान समिति के धार्मिक एवं सामाजिक कार्यों में प्रयुक्त किया जाएगा।
                </p>

                {/* QR Code Image - Full Size */}
                <div className="text-center my-4">
                  <img
                    src="https://res.cloudinary.com/dsoppcx77/image/upload/v1740552231/QR-code-donation_k5vuaf.jpg" // Replace with actual QR code
                    alt="Donation QR Code"
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      borderRadius: "10px",
                      border: "4px solid #8B0000",
                    }}
                  />
                </div>

                {/* Account Details */}
                <div
                  className="p-3"
                  style={{
                    backgroundColor: "#fff5e6", // Light cream background
                    borderRadius: "10px",
                    border: "2px solid #8B0000",
                    marginBottom: "20px",
                  }}
                >
                  <h5
                    className="fw-bold"
                    style={{ color: "#8B0000", marginBottom: "10px" }}
                  >
                    बैंक खाता विवरण:
                  </h5>
                  <p style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
                    🏦 **समिति का नाम:** माँ खेरापति नव दुर्गा महोत्सव समिति<br />
                    👤 **खाता धारक:** महेन्द्र लोधी <br />
                    🏦 **बैंक का नाम:**सेंट्रल बैंक ऑफ़ इंडिया <br />
                    🔢 **खाता संख्या:** 338886630 <br />
                    🏛 **IFSC कोड:** CBIN0281524
                  </p>
                </div>

                {/* UPI ID */}
                <div
                  className="p-2"
                  style={{
                    backgroundColor: "#ffcccc",
                    borderRadius: "10px",
                    border: "2px solid #8B0000",
                    marginBottom: "20px",
                  }}
                >
                  <h5
                    className="fw-bold"
                    style={{ color: "#8B0000", marginBottom: "10px" }}
                  >
                    UPI आईडी:
                  </h5>
                  <p
                    className="fw-bold"
                    style={{
                      fontSize: "20px",
                      color: "#660000",
                      backgroundColor: "#fff",
                      display: "inline-block",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      border: "2px dashed #8B0000",
                    }}
                  >
                    2333@ybl
                  </p>
                </div>

                {/* Donation Button */}
                <Button
                  variant="danger"
                  className="mt-3 fw-bold"
                  style={{
                    backgroundColor: "#8B0000",
                    border: "none",
                    fontSize: "18px",
                  }}
                >
                  अब दान करें 🚀
                </Button>

                {/* Contact Information */}
                <div className="mt-4">
                  <h5 className="fw-bold" style={{ color: "#8B0000" }}>
                    किसी भी जानकारी के लिए संपर्क करें:
                  </h5>
                  <p style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
                    📞 +91 98765 43210 <br />
                    📞 +91 91234 56789
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Benefits of Donation Section */}
        <Row className="justify-content-center mt-5">
          <Col md={8} sm={12}>
            <Card
              className="shadow p-4"
              style={{
                background: "#ffe6e6", // Light Pinkish Red
                border: "4px solid #8B0000",
                borderRadius: "15px",
              }}
            >
              <Card.Body>
                <h3
                  className="text-center fw-bold mb-3"
                  style={{ color: "#8B0000" }}
                >
                  🏵️ दान देने के फायदे 🏵️
                </h3>
                <ul
                  style={{
                    fontSize: "18px",
                    color: "#660000",
                    fontWeight: "bold",
                    lineHeight: "1.8",
                  }}
                >
                  <li>❇️ दान करने से मन की शांति एवं आंतरिक संतोष की प्राप्ति होती है।</li>
                  <li>❇️ जीवन में सकारात्मक ऊर्जा एवं सुख-समृद्धि बनी रहती है।</li>
                  <li>❇️ धार्मिक कार्यों में योगदान देने से पुण्य की प्राप्ति होती है।</li>
                  <li>❇️ दान देने से भगवान की कृपा सदैव बनी रहती है।</li>
                  <li>❇️ सामाजिक कल्याण में आपका योगदान नए अवसर प्रदान करता है।</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DonationPage;
