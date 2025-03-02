import { useState, useEffect } from "react";
import { database, ref, get } from "../firebaseConfig";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function PlacesToVisit() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      try {
        const placesRef = ref(database, "PlacesToVisit");
        const snapshot = await get(placesRef);

        if (snapshot.exists()) {
          const placesData = snapshot.val();
          const placesList = Object.values(placesData);
          setPlaces(placesList);
        } else {
          setPlaces([]);
        }
      } catch (error) {
        console.error("Error fetching places:", error);
      }
      setLoading(false);
    };

    fetchPlaces();
  }, []);

  return (
    <div style={{ background: "linear-gradient(to right, #FFDAB9, #FA8072)", minHeight: "100vh", padding: "40px 0" }}>
      <Container>
        <motion.h2
          className="text-center fw-bold mb-4"
          style={{ color: "#8B0000", textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🌍 मेख  के अन्य दर्शनीय स्थल - Places to Visit 🙏
        </motion.h2>

        {loading ? (
          <p className="text-center fw-bold text-danger">🚀 स्थान लोड हो रहे हैं...</p>
        ) : places.length === 0 ? (
          <p className="text-center text-muted">⚠️ कोई स्थान उपलब्ध नहीं हैं।</p>
        ) : (
          <Row className="g-4 justify-content-center">
            {places.map((place, index) => (
              <Col md={6} lg={6} key={index}> 
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    className="shadow border-0 text-center p-3"
                    style={{
                      background: "linear-gradient(to right, #FFE4B5, #FF6347)",
                      borderRadius: "15px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <Image
                      src={place.image}
                      alt={place.name}
                      className="img-fluid rounded shadow mb-3"
                      style={{
                        height: "400px", // Bigger image
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: "0 3px 8px rgba(0, 0, 0, 0.3)",
                      }}
                    />
                    <h4 className="fw-bold text-white">{place.name}</h4>
                    <p className="fs-5 text-light">{place.description}</p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default PlacesToVisit;
