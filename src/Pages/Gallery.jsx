// import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaShareAlt } from "react-icons/fa";

const Gallery = () => {
  // Image Data Array (Without API)
  const images = [
    { id: 1, url: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/xvzzuxu0mqob7asfq8th.jpg" },
    { id: 2, url: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/j7ozprr3tvfhg91bl0ee.jpg" },
    { id: 3, url: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541264/Mekh-Mata/sr22emuzeopvfgen10q8.jpg" },
    { id: 4, url: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/xvzzuxu0mqob7asfq8th.jpg" },
    { id: 5, url: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/dgk6stguso9sdxizsc9z.jpg" },
  ];

  // CSS Styling as JavaScript Object
  const styles = {
    galleryContainer: {
      textAlign: "center",
      padding: "40px",
      backgroundColor: "#fff5f5", // Light red background
    },
    galleryTitle: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#D32F2F", // Deep red title
      marginBottom: "20px",
    },
    galleryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "15px",
      padding: "20px",
    },
    galleryItem: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease-in-out",
    },
    galleryImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "10px",
    },
    actionButtons: {
      position: "absolute",
      bottom: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "10px",
    },
    button: {
      backgroundColor: "#D32F2F",
      color: "#fff",
      border: "none",
      padding: "8px 12px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
  };

  // Function to Download Image
  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "Durga_Mata_Image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to Share Image
  const shareImage = (url) => {
    const shareText = `🌸 माँ खेरापति नव दुर्गा महोत्सव 🌸\n देखिए ये शानदार तस्वीरें! 📸\n ${url}`;
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <div style={styles.galleryContainer}>
      <h2 style={styles.galleryTitle}>📸 माँ खेरापति नव दुर्गा महोत्सव - गैलरी</h2>
      <div style={styles.galleryGrid}>
        {images.map((image) => (
          <motion.div
            key={image.id}
            style={styles.galleryItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: image.id * 0.1 }}
          >
            <img src={image.url} alt={`Gallery ${image.id}`} style={styles.galleryImage} />
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
    </div>
  );
};

export default Gallery;
