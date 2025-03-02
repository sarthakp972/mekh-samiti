import { useState, useEffect, useCallback } from "react";
import { database, ref, get } from "../firebaseConfig";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

// Styles for Carousel
const bannerStyles = {
  carousel: {
    width: "100%",
    maxHeight: "500px",
  },
  image: {
    height: "500px",
    objectFit: "cover",
    width: "100%",
  },
};

function ImageCarousel() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch slide images from Firebase
  const fetchSlides = useCallback(async () => {
    setLoading(true);
    try {
      const snapshot = await get(ref(database, "slide_images"));
      if (snapshot.exists()) {
        setSlides(snapshot.val().images || []);
      } else {
        console.error("No slide images found in Firebase.");
      }
    } catch (error) {
      console.error("Error fetching slides:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSlides();
  }, [fetchSlides]);

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold mb-3" style={{ color: "#8B0000" }}>
        📸 मंदिर की झलकियां - Temple Glimpses 📸
      </h2>

      {loading ? (
        <p className="text-center fw-bold text-danger">लोड हो रहा है...</p>
      ) : (
        <Carousel data-bs-theme="dark" style={bannerStyles.carousel}>
          {slides.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                style={bannerStyles.image}
                src={item.imageUrl}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption>
                <h5>{item.title || `Slide ${index + 1}`}</h5>
                <p>{item.description || ""}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default ImageCarousel;
