import { database, ref, set } from "../firebaseConfig";
import { useState } from "react";

const UploadPage = () => {
  const [uploading, setUploading] = useState(false);
  const galleryImagesD = [
    { id: 1, url: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/xvzzuxu0mqob7asfq8th.jpg" },
    { id: 2, url: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/j7ozprr3tvfhg91bl0ee.jpg" },
    { id: 3, url: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541264/Mekh-Mata/sr22emuzeopvfgen10q8.jpg" },
    { id: 4, url: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/dgk6stguso9sdxizsc9z.jpg" },
  ];

  const uploadData = async () => {
    setUploading(true);
    try {
      await set(ref(database, "galleryImagesD"), galleryImagesD);
      alert("Images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Upload failed!");
    }
    setUploading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>📤 Upload Gallery Images</h2>
      <button
        onClick={uploadData}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#D32F2F",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload to Firebase"}
      </button>
    </div>
  );
};

export default UploadPage;
