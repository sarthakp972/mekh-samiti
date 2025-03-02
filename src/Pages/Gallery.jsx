import { useState, useEffect } from "react";
import { database, ref, get } from "../firebaseConfig";
import { motion } from "framer-motion";
import { FaDownload, FaShareAlt } from "react-icons/fa";
import VideoSection from "./VideoSection";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      setLoading(true);
      try {
        const snapshot = await get(ref(database, "galleryImagesD"));
        if (snapshot.exists()) {
          setGalleryImages(snapshot.val());
        } else {
          console.warn("No images found in Firebase.");
          setGalleryImages([]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
      setLoading(false);
    };

    fetchGalleryImages();
  }, []);

  // Styling
  const styles = {
    galleryContainer: { textAlign: "center", padding: "40px", backgroundColor: "#fff5f5" },
    galleryTitle: { fontSize: "28px", fontWeight: "bold", color: "#D32F2F", marginBottom: "20px" },
    galleryGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", padding: "20px" },
    galleryItem: { position: "relative", overflow: "hidden", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", transition: "transform 0.3s ease-in-out" },
    galleryImage: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" },
    actionButtons: { position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px" },
    button: { backgroundColor: "#D32F2F", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", gap: "5px" },
  };

  // Download Image
  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "Durga_Mata_Image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Share Image
  const shareImage = (url) => {
    const shareText = `🌸 माँ खेरापति नव दुर्गा महोत्सव 🌸\n देखिए ये शानदार तस्वीरें! 📸\n ${url}`;
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <>
    
    <div style={styles.galleryContainer}>
      <h2 style={styles.galleryTitle}>📸 माँ खेरापति नव दुर्गा महोत्सव - गैलरी</h2>

      {loading ? (
        <p className="text-center fw-bold text-danger">🚀 गैलरी लोड हो रही है...</p>
      ) : galleryImages.length > 0 ? (
        <div style={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              style={styles.galleryItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={image.url} alt={`Gallery ${index}`} style={styles.galleryImage} />
              <div style={styles.actionButtons}>
                <button style={styles.button} onClick={() => downloadImage(image.url)}>
                  <FaDownload /> Download
                </button>
                <button style={styles.button} onClick={() => shareImage(image.url)}>
                  <FaShareAlt /> Share
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center fw-bold text-danger">⚠️ कोई तस्वीरें उपलब्ध नहीं हैं।</p>
      )}

      
    </div>
          <VideoSection/>

    </>
  );
};

export default Gallery;
