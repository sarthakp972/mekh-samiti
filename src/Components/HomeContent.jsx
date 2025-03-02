import { useState, useEffect, useCallback } from "react";
import { database, ref, get, set } from "../firebaseConfig";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Default content if Firebase is empty
const defaultContent = {
  years: [
    {
      year: "प्रथम बार ",
      description:
        "🌺 माँ खेरापति मढ़िया पर प्रथम वर्ष मां दुर्गा की विशाल प्रतिमा एवं 9 कलशों की स्थापना 22 मार्च 2023 को हुई। नवरात्रि का पर्व हर्षोल्लास से मनाया गया। दसवें दिन भव्य शोभायात्रा के साथ माता का विसर्जन सांकल घाट में संपन्न हुआ। 🙏",
      images: [
        "https://via.placeholder.com/400x250?text=2023+Image+1",
        "https://via.placeholder.com/400x250?text=2023+Image+2",
        "https://via.placeholder.com/400x250?text=2023+Image+3",
      ],
    },
    {
      year: "द्वितीय वर्ष ",
      description:
        "🔥 द्वितीय वर्ष मां दुर्गा की प्रतिमा को झूले पर स्थापित किया गया, जिससे भक्ति और आस्था का माहौल बना। 11 अप्रैल 2024 को 11 कलशों की स्थापना हुई और शोभायात्रा निकाली गई। भव्य आयोजन के साथ भक्तों ने मां के चरणों में श्रद्धा व्यक्त की। 🔱",
      images: [
        "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/dgk6stguso9sdxizsc9z.jpg",
        "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/xvzzuxu0mqob7asfq8th.jpg",
        "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/j7ozprr3tvfhg91bl0ee.jpg",
      ],
    },
  ],
};

function HomeContent() {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  // Fetch content from Firebase
  const fetchContent = useCallback(async () => {
    setLoading(true);
    try {
      const snapshot = await get(ref(database, "home_content"));
      if (snapshot.exists()) {
        let data = snapshot.val();

        // Ensure Firebase structure is correct
        const updatedContent = { ...defaultContent, ...data };

        // Update Firebase if attributes are missing
        if (JSON.stringify(data) !== JSON.stringify(updatedContent)) {
          await set(ref(database, "home_content"), updatedContent);
        }

        setContent(updatedContent);
      } else {
        // Insert default data if Firebase is empty
        await set(ref(database, "home_content"), defaultContent);
        setContent(defaultContent);
      }
    } catch (error) {
      console.error("Error fetching content:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return (
    <Container className="mt-4">
      <motion.h2
        className="text-center fw-bold mb-4"
        style={{ color: "#B22222", textShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🌸 माता के महोत्सव की झलकियां 🔥
      </motion.h2>

      {loading ? (
        <p className="text-center fw-bold text-danger">🚀 लोड हो रहा है...</p>
      ) : (
        content.years.map((yearData, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="mb-5 p-4 rounded"
            style={{
              background: "linear-gradient(to right, #FFDAB9, #FA8072)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "12px",
            }}
          >
            <h3 className="text-center fw-bold" style={{ color: "#800000" }}>
              🏵 {yearData.year} का महोत्सव 🏵
            </h3>
            <p
              className="text-center"
              style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "#4B0082",
              }}
            >
              {yearData.description}
            </p>

            <Row className="justify-content-center">
              {yearData.images.map((image, imgIndex) => (
                <Col
                  key={imgIndex}
                  md={4}
                  sm={6}
                  xs={12}
                  className="d-flex justify-content-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                    className="shadow-lg rounded-3 overflow-hidden"
                    style={{ borderRadius: "15px" }}
                  >
                    <Card
                      className="border-0"
                      style={{
                        width: "19rem",
                        borderRadius: "15px",
                        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                  <Card.Img
  variant="top"
  src={image}
  style={{
    width: "100%",         // Ensures full width
    height: "100%",        // Ensures full height
    objectFit: "contain",  // Prevents cropping, fits inside the card
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  }}
                      />
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        ))
      )}
    </Container>
  );
}

export default HomeContent;
