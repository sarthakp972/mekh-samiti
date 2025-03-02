import { useState, useEffect, useCallback } from "react";
import { database, ref, get, set } from "../firebaseConfig";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Default structure to ensure contact numbers exist
const defaultContactData = {
  contact_numbers: ["+91 8305388489", "+91  7974039009"], // Default numbers
};

function NoticePage() {
  const [notices, setNotices] = useState([]);
  const [contactNumbers, setContactNumbers] = useState(defaultContactData.contact_numbers);
  const [loading, setLoading] = useState(true);

  // Fetch Notices from Firebase
  const fetchNotices = useCallback(async () => {
    setLoading(true);
    try {
      const snapshot = await get(ref(database, "notices"));
      if (snapshot.exists()) {
        setNotices(snapshot.val());
      } else {
        setNotices([]); // No notices found
      }
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
    setLoading(false);
  }, []);

  // Fetch Contact Numbers from Firebase
  const fetchContactData = useCallback(async () => {
    try {
      const snapshot = await get(ref(database, "contact_info"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const updatedData = { ...defaultContactData, ...data }; // Ensure missing data is filled

        if (JSON.stringify(data) !== JSON.stringify(updatedData)) {
          await set(ref(database, "contact_info"), updatedData); // Update Firebase if needed
        }

        setContactNumbers(updatedData.contact_numbers);
      } else {
        await set(ref(database, "contact_info"), defaultContactData);
        setContactNumbers(defaultContactData.contact_numbers);
      }
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  }, []);

  useEffect(() => {
    fetchNotices();
    fetchContactData();
  }, [fetchNotices, fetchContactData]);

  return (
    <div style={{ background: "linear-gradient(to bottom, #ffcccc, #ff6666)", minHeight: "100vh", padding: "40px 0" }}>
      <Container>
        {/* Page Title */}
        <h2 className="text-center fw-bold mb-4" style={{ color: "#8B0000", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
          🔔 माँ खेरापति नव दुर्गा महोत्सव - सूचना पृष्ठ 🔔
        </h2>

        {loading ? (
          <p className="text-center fw-bold text-danger">🚀 लोड हो रहा है...</p>
        ) : notices.length > 0 ? (
          <Row className="justify-content-center">
            {notices.map((notice, index) => (
              <Col md={6} sm={12} key={index} className="mb-4">
                <Card className="text-center shadow" style={{ background: "rgba(255, 230, 230, 0.9)", border: "3px solid #8B0000", borderRadius: "15px", padding: "15px" }}>
                  <Card.Body>
                    <h5 className="fw-bold" style={{ color: "#8B0000", fontSize: "20px" }}>{notice.event}</h5>
                    <p style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
                      📅 {notice.date} <br />
                      📍 स्थान: {notice.location} <br />
                      {notice.time}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-center fw-bold text-danger">⚠️ कोई सूचना उपलब्ध नहीं है।</p>
        )}

        {/* Contact Information (Fetched from Firebase) */}
        <div className="text-center mt-5">
          <h5 className="fw-bold" style={{ color: "#8B0000" }}>📞 किसी भी जानकारी के लिए संपर्क करें:</h5>
          {contactNumbers.map((number, index) => (
            <p key={index} style={{ fontSize: "18px", fontWeight: "bold", color: "#660000" }}>
              📞 {number}
            </p>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default NoticePage;
