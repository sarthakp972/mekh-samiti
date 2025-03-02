import { useState, useEffect } from "react";
import { Container, Accordion } from "react-bootstrap";
import { database, ref, get } from "../firebaseConfig"; // Import Firebase functions
import "bootstrap/dist/css/bootstrap.min.css";

function Aarti() {
  const [aartiList, setAartiList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Aarti data from Firebase
  useEffect(() => {
    const fetchAarti = async () => {
      try {
        const snapshot = await get(ref(database, "Aarti"));
        if (snapshot.exists()) {
          setAartiList(snapshot.val());
        } else {
          console.warn("No Aarti data found.");
          setAartiList([]);
        }
      } catch (error) {
        console.error("Error fetching Aarti data:", error);
      }
      setLoading(false);
    };

    fetchAarti();
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
        {/* Page Title */}
        <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#8B0000", // Dark Red
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          🙏 आरतियाँ 🙏
        </h2>

        {/* Aarti Accordion */}
        {loading ? (
          <p className="text-center">🚀 आरती डेटा लोड हो रहा है...</p>
        ) : (
          <Accordion defaultActiveKey="0">
            {aartiList.length > 0 ? (
              aartiList.map((aarti, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>🌺 {aarti.title} 🌺</Accordion.Header>
                  <Accordion.Body>
                    <p>{aarti.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))
            ) : (
              <p className="text-center">⚠️ कोई आरती डेटा उपलब्ध नहीं है।</p>
            )}
          </Accordion>
        )}
      </Container>
    </div>
  );
}

export default Aarti;
