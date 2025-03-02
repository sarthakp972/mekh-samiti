import { useState, useEffect } from "react";
import { database, ref, set, get} from "../firebaseConfig";

const MataAarti = () => {
  const [aartiList, setAartiList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Aarti Data to Upload
  const aartiData = [
    {
      title: "जय अम्बे गौरी",
      description: `जय अम्बे गौरी, मैया जय श्यामा गौरी।
      तुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी॥
      अम्बे गौरी, जय अम्बे गौरी॥`,
    },
    {
      title: "ॐ जय जगदीश हरे",
      description: `ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।
      भक्त जनों के संकट, दास जनों के संकट,
      क्षण में दूर करे॥`,
    },
  ];

  // Function to Upload Aarti Data to Firebase
  const uploadAartiData = async () => {
    try {
      const aartiRef = ref(database, "Aarti");
      await set(aartiRef, aartiData);
      console.log("Aarti data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading Aarti data:", error);
    }
  };

  // Function to Fetch Aarti Data from Firebase
  useEffect(() => {
    const fetchAartiData = async () => {
      setLoading(true);
      try {
        const snapshot = await get(ref(database, "Aarti"));
        if (snapshot.exists()) {
          setAartiList(snapshot.val());
        } else {
          console.warn("No Aarti data found.");
          setAartiList([]);
        }
      } catch (error) {
        console.error("Error fetching Aarti data:", error);
      }
      setLoading(false);
    };

    fetchAartiData();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "40px", backgroundColor: "#fff5f5" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#D32F2F", marginBottom: "20px" }}>
        🌸 माँ खेरापति नव दुर्गा महोत्सव - आरती 🌸
      </h2>

      <button onClick={uploadAartiData} style={{ padding: "10px 20px", marginBottom: "20px", cursor: "pointer" }}>
        🔼 Upload Aarti Data
      </button>

      {loading ? (
        <p className="text-danger">🚀 आरती लोड हो रही है...</p>
      ) : aartiList.length > 0 ? (
        <div>
          {aartiList.map((aarti, index) => (
            <div key={index} style={{ background: "#ffe0e0", padding: "15px", margin: "10px 0", borderRadius: "10px" }}>
              <h3 style={{ color: "#D32F2F" }}>{aarti.title}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{aarti.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-danger">⚠️ कोई आरती उपलब्ध नहीं है।</p>
      )}
    </div>
  );
};

export default MataAarti;
