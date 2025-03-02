import { useState, useEffect } from "react";
import { database, ref, set, get } from "../firebaseConfig"; // Ensure correct Firebase import

const Video = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videos, setVideos] = useState({}); // Store videos as an object

  // 📌 Fetch Video URLs from Firebase
  useEffect(() => {
    const fetchVideos = async () => {
      const videoRef = ref(database, "videoUrls");
      const snapshot = await get(videoRef);

      if (snapshot.exists()) {
        setVideos(snapshot.val()); // Store as an object
      } else {
        setVideos({}); // If no videos, set empty object
      }
    };

    fetchVideos();
  }, []);

  // 📌 Save Video URL to Firebase (Stores in a single object)
  const saveVideo = async () => {
    if (!videoUrl.trim()) {
      alert("Please enter a valid video URL!");
      return;
    }

    try {
      const updatedVideos = { ...videos, [`url${Object.keys(videos).length + 1}`]: videoUrl };

      await set(ref(database, "videoUrls"), updatedVideos); // Save entire object

      setVideos(updatedVideos); // Update state
      setVideoUrl(""); // Clear input field

      alert("Video URL saved successfully!");
    } catch (error) {
      console.error("Error saving video:", error);
      alert("Failed to save video.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📹 माँ खेरापति नव दुर्गा महोत्सव - वीडियो गैलरी</h2>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Paste video URL here..."
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        style={{ padding: "8px", width: "300px", marginRight: "10px" }}
      />
      <button
        onClick={saveVideo}
        style={{
          padding: "8px 15px",
          cursor: "pointer",
          backgroundColor: "#D32F2F",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Save Video
      </button>

      {/* Video Display */}
      <div style={{ marginTop: "20px" }}>
        {Object.keys(videos).length === 0 ? (
          <p>No videos available.</p>
        ) : (
          Object.values(videos).map((video, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <iframe
                width="560"
                height="315"
                src={video}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Video;
