import { useState, useEffect } from "react";
import { database, ref, get, set } from "../firebaseConfig";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AddressPage() {
  const [addressInfo, setAddressInfo] = useState({
    temple_Address: "",
    Nivedak: "",
    contact_numbers: ["", ""], // Default two numbers
    instagram: "",
    email: "",
    whatsapp_id: "",
  });

  const [loading, setLoading] = useState(false);

  // Fetch Address Data from Firebase
  const fetchAddressData = async () => {
    setLoading(true);
    try {
      const addressSnapshot = await get(ref(database, "address_info"));
      if (addressSnapshot.exists()) {
        setAddressInfo(addressSnapshot.val());
      }
    } catch (error) {
      console.error("Error fetching address data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAddressData();
  }, []);

  // Handle Form Input Changes
  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updatedNumbers = [...addressInfo.contact_numbers];
      updatedNumbers[index] = value;
      setAddressInfo({ ...addressInfo, contact_numbers: updatedNumbers });
    } else {
      setAddressInfo({ ...addressInfo, [name]: value });
    }
  };

  // Handle Form Submission (Insert Data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await set(ref(database, "address_info"), addressInfo);
      alert("✅ पता सफलतापूर्वक जोड़ा गया!");
    } catch (error) {
      console.error("Error inserting address data:", error);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #ffcccc, #ff6666)",
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
          📍 मंदिर का पता 📍
        </h2>

        <Row className="justify-content-center">
          <Col md={8} sm={12}>
            <Card
              className="text-center shadow p-4"
              style={{
                background: "rgba(255, 230, 230, 0.9)",
                border: "4px solid #8B0000",
                borderRadius: "15px",
              }}
            >
              <Card.Body>
                {loading ? (
                  <p style={{ color: "#8B0000", fontWeight: "bold" }}>
                    डेटा लोड हो रहा है...
                  </p>
                ) : (
                  <>
                    <p style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
                      📍 <b>स्थान:</b> {addressInfo.temple_Address || "स्थान दर्ज करें"}
                    </p>

                    <p style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
                      🙏 <b>निवेदक:</b> {addressInfo.Nivedak || "निवेदक का नाम दर्ज करें"}
                    </p>

                    <h5 className="fw-bold" style={{ color: "#8B0000" }}>
                      📞 संपर्क नंबर:
                    </h5>
                    {addressInfo.contact_numbers.map((number, index) => (
                      <p key={index} style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
                        📞 {number}
                      </p>
                    ))}

                    <p style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
                      📸 <b>Instagram:</b> <a href={`https://instagram.com/${addressInfo.instagram}`} target="_blank" rel="noopener noreferrer">@{addressInfo.instagram}</a>
                    </p>
                    <p style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
                      📧 <b>Email:</b> {addressInfo.email}
                    </p>
                    {addressInfo.whatsapp_id && (
                      <p style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
                        💬 <b>WhatsApp:</b> 📲 {addressInfo.whatsapp_id}
                      </p>
                    )}
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Insert/Update Form */}
        <Row className="justify-content-center mt-5">
          <Col md={8} sm={12}>
            <Card className="p-4 shadow">
              <h3 className="text-center mb-4" style={{ color: "#8B0000" }}>
                🔄 पता जोड़ें / अपडेट करें
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>स्थान</Form.Label>
                  <Form.Control type="text" name="temple_Address" value={addressInfo.temple_Address} onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>निवेदक</Form.Label>
                  <Form.Control type="text" name="Nivedak" value={addressInfo.Nivedak} onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>संपर्क नंबर</Form.Label>
                  {addressInfo.contact_numbers.map((number, index) => (
                    <Form.Control key={index} type="text" value={number} onChange={(e) => handleChange(e, index)} required className="mb-2" />
                  ))}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control type="text" name="instagram" value={addressInfo.instagram} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={addressInfo.email} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>WhatsApp ID</Form.Label>
                  <Form.Control type="text" name="whatsapp_id" value={addressInfo.whatsapp_id} onChange={handleChange} />
                </Form.Group>

                <Button type="submit" variant="danger" className="w-100 fw-bold">
                  💾 सेव करें
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddressPage;
