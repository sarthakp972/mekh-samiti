import { useState, useEffect } from "react";
import { database, ref, get } from "../firebaseConfig"; // Ensure correct Firebase import
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function VideoSection() {
  const [videos, setVideos] = useState([]);

  // 📌 Fetch Video URLs from Firebase
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoRef = ref(database, "videoUrls");
        const snapshot = await get(videoRef);

        if (snapshot.exists()) {
          const videoData = snapshot.val();
          const videoList = Object.values(videoData); // Convert object to array
          setVideos(videoList);
        } else {
          setVideos([]); // If no videos, set an empty array
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

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
          माँ खेरापति माता के पावन दर्शन – वीडियो गैलरी
        </motion.h2>

        <Row className="justify-content-center">
          {videos.length === 0 ? (
            <p className="text-center">No videos available.</p>
          ) : (
            videos.map((videoUrl, index) => (
              <Col key={index} md={6} className="mb-4 text-center">
                {/* Video Container with Fade-in Effect */}
                <motion.div
                  className="embed-responsive embed-responsive-16by9"
                  style={{
                    border: "5px solid #b30000", // Deep Red Border
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <iframe
                    className="embed-responsive-item"
                    width="100%"
                    height="300"
                    src={videoUrl}
                    title={`Video ${index + 1}`}
                    allowFullScreen
                    style={{ borderRadius: "10px" }}
                  ></iframe>
                </motion.div>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
}

export default VideoSection;
