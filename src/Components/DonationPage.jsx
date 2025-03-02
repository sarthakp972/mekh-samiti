import { useState, useEffect } from "react";
import { database, ref, get } from "../firebaseConfig";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DonationPage() {
  const [bankDetails, setBankDetails] = useState(null);

  // Function to fetch bank details from Firebase
  const fetchBankDetails = async () => {
    try {
      const snapshot = await get(ref(database, "samiti_bank_details"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const firstEntry = Object.values(data)[0]; // Assuming single/multiple entries, taking first one
        setBankDetails(firstEntry);
      } else {
        setBankDetails(null);
      }
    } catch (error) {
      console.error("Error fetching bank details:", error);
    }
  };

  useEffect(() => {
    fetchBankDetails();
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #ffcccc, #ff6666)", // Red Gradient
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Container>
        <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#8B0000",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          🙏 माँ खेरापति नव दुर्गा महोत्सव - दान पृष्ठ 🙏
        </h2>

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
                <h4 style={{ color: "#8B0000", fontWeight: "bold" }}>
                  आपका सहयोग हमारी आस्था को और मजबूत करेगा!
                </h4>
                <p style={{ color: "#660000", fontSize: "18px" }}>
                  माँ खेरापति नव दुर्गा महोत्सव में दान देकर पुण्य अर्जित करें।
                  आपका योगदान समिति के धार्मिक एवं सामाजिक कार्यों में प्रयुक्त किया जाएगा।
                </p>

                {bankDetails ? (
                  <>
                    {/* QR Code Image */}
                    <div className="text-center my-4">
                      <img
                        src={bankDetails.qr_image}
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
                        backgroundColor: "#fff5e6",
                        borderRadius: "10px",
                        border: "2px solid #8B0000",
                        marginBottom: "20px",
                      }}
                    >
                      <h5 className="fw-bold" style={{ color: "#8B0000" }}>
                        बैंक खाता विवरण:
                      </h5>
                      <p style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
                        🏦 <b>समिति का नाम:</b> {bankDetails.samiti_name} <br />
                        👤 <b>खाता धारक:</b> {bankDetails.account_holder_name} <br />
                        🏦 <b>बैंक का नाम:</b> {bankDetails.bank_name} <br />
                        🔢 <b>खाता संख्या:</b> {bankDetails.account_number} <br />
                        🏛 <b>IFSC कोड:</b> {bankDetails.ifsc_code}
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
                      <h5 className="fw-bold" style={{ color: "#8B0000" }}>
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
                        {bankDetails.upi_id}
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
                        📞 {bankDetails.contact_number} <br />
                        📞 {bankDetails.contact_number2} <br />
                        📞 {bankDetails.contact_number3}
                      </p>
                    </div>
                  </>
                ) : (
                  <p style={{ color: "#8B0000", fontWeight: "bold" }}>
                    बैंक विवरण लोड हो रहे हैं...
                  </p>
                )}
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
                background: "#ffe6e6",
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
