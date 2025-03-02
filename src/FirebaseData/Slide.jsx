import { useState, useEffect, useCallback } from "react";
import { database, ref, get, set } from "../firebaseConfig";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Default slide images if Firebase is empty
const defaultSlides = {
  images: [
    {
      imageUrl: "https://via.placeholder.com/800x400?text=Slide+1",
      title: "Default Slide 1",
      description: "This is a default image. Please upload real images.",
    },
    {
      imageUrl: "https://via.placeholder.com/800x400?text=Slide+2",
      title: "Default Slide 2",
      description: "This is a default image. Please upload real images.",
    },
    {
      imageUrl: "https://via.placeholder.com/800x400?text=Slide+3",
      title: "Default Slide 3",
      description: "This is a default image. Please upload real images.",
    },
  ],
};

function Slide() {
  const [slides, setSlides] = useState(defaultSlides);
  const [loading, setLoading] = useState(true);

  // Fetch slide images from Firebase
  const fetchSlides = useCallback(async () => {
    setLoading(true);
    try {
      const snapshot = await get(ref(database, "slide_images"));
      if (snapshot.exists()) {
        let data = snapshot.val();

        // Ensure all attributes exist
        const updatedSlides = { ...defaultSlides, ...data };

        // If any attribute is missing, update Firebase
        if (JSON.stringify(data) !== JSON.stringify(updatedSlides)) {
          await set(ref(database, "slide_images"), updatedSlides);
        }

        setSlides(updatedSlides);
      } else {
        // Insert default data if Firebase is empty
        await set(ref(database, "slide_images"), defaultSlides);
        setSlides(defaultSlides);
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
        <Carousel>
          {slides.images.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.imageUrl}
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Slide;
