import { useState, useEffect } from "react";
import { database, ref, get, push, set } from "../firebaseConfig"; // Ensure correct Firebase import
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function AnyaDarshansthal() {
  const [mandirs, setMandirs] = useState([]);
  const [newMandir, setNewMandir] = useState({
    Mandir_name: "",
    Mandir_Description: "",
    MandirimageUrl: "",
  });

  // 📌 Fetch Mandirs from Firebase
  useEffect(() => {
    const fetchMandirs = async () => {
      try {
        const mandirRef = ref(database, "OtherPlace");
        const snapshot = await get(mandirRef);

        if (snapshot.exists()) {
          const mandirData = snapshot.val();
          const mandirList = Object.values(mandirData);
          setMandirs(mandirList);
        } else {
          // If no data exists, insert initial data
          const defaultData = [
            {
              Mandir_name: "खेरापति माता मंदिर",
              Mandir_Description: "यह मंदिर माँ खेरापति का प्रसिद्ध स्थल है।",
              MandirimageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
            },
            {
              Mandir_name: "हनुमान मंदिर",
              Mandir_Description: "यहाँ बजरंगबली की पूजा होती है।",
              MandirimageUrl: "https://via.placeholder.com/300",
            },
          ];
          defaultData.forEach(async (mandir) => {
            const newMandirRef = push(mandirRef);
            await set(newMandirRef, mandir);
          });
          setMandirs(defaultData);
        }
      } catch (error) {
        console.error("Error fetching mandirs:", error);
      }
    };

    fetchMandirs();
  }, []);

  // 📌 Handle Input Change
  const handleChange = (e) => {
    setNewMandir({ ...newMandir, [e.target.name]: e.target.value });
  };

  // 📌 Add New Mandir to Firebase
  const addMandir = async () => {
    if (!newMandir.Mandir_name || !newMandir.Mandir_Description || !newMandir.MandirimageUrl) {
      alert("कृपया सभी जानकारी भरें!");
      return;
    }

    try {
      const newMandirRef = push(ref(database, "OtherPlace"));
      await set(newMandirRef, newMandir);
      setMandirs([...mandirs, newMandir]);
      setNewMandir({ Mandir_name: "", Mandir_Description: "", MandirimageUrl: "" });
      alert("मंदिर सफलतापूर्वक जोड़ा गया!");
    } catch (error) {
      console.error("Error adding mandir:", error);
      alert("मंदिर जोड़ने में त्रुटि हुई।");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #ffe6e6, #ffcccc)", // Light red gradient
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <Container>
        {/* Title with Animation */}
        <motion.h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#8B0000", // Dark Red
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          अन्य दर्शन स्थल
        </motion.h2>

        {/* Add New Mandir Form */}
        <Form className="mb-5 text-center">
          <Row className="justify-content-center">
            <Col md={4}>
              <Form.Control
                type="text"
                name="Mandir_name"
                placeholder="मंदिर का नाम"
                value={newMandir.Mandir_name}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="text"
                name="Mandir_Description"
                placeholder="मंदिर का विवरण"
                value={newMandir.Mandir_Description}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="text"
                name="MandirimageUrl"
                placeholder="मंदिर की छवि URL"
                value={newMandir.MandirimageUrl}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>
          </Row>
          <Button variant="danger" onClick={addMandir}>
            नया मंदिर जोड़ें
          </Button>
        </Form>

        {/* Display Mandirs */}
        <Row className="justify-content-center">
          {mandirs.length === 0 ? (
            <p className="text-center">कोई मंदिर उपलब्ध नहीं है।</p>
          ) : (
            mandirs.map((mandir, index) => (
              <Col key={index} md={4} className="mb-4 text-center">
                {/* Card with Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Card style={{ boxShadow: "0px 4px 8px rgba(0,0,0,0.3)" }}>
                    <Card.Img
                      variant="top"
                      src={mandir.MandirimageUrl}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold">{mandir.Mandir_name}</Card.Title>
                      <Card.Text>{mandir.Mandir_Description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
}

export default AnyaDarshansthal;
