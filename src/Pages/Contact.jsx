import { useState, useEffect, useCallback } from "react";
import { database, ref, get, set } from "../firebaseConfig";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhone, FaInstagram } from "react-icons/fa"; // Removed WhatsApp icon
import { MdEmail } from "react-icons/md"; // Added Email icon
import PlacesToVisit from "../Components/PlacesToVisit";
import "bootstrap/dist/css/bootstrap.min.css";

// Default data structure to ensure all fields exist
const defaultData = {
  address: "मढ़िया माता मंदिर, मेख, जिला नरसिंहपुर, मध्य प्रदेश",
  contact_numbers: ["+91 98765 43210", "+91 91234 56789"],
  instagram: "@your_instagram_id",
  email: "example@email.com", // Updated default email
  google_map_link:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.216673503929!2d79.37296445!3d22.979058549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397f807db4782a4f%3A0x27ded1da01c77ddc!2sMekh%2C%20Madhya%20Pradesh%20487114!5e0!3m2!1sen!2sin!4v1740564516912!5m2!1sen!2sin",
};

function Contact() {
  const [contactData, setContactData] = useState(defaultData);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firebase and ensure missing attributes are added
  const fetchContactData = useCallback(async () => {
    setLoading(true);
    try {
      const snapshot = await get(ref(database, "contact_info"));
      if (snapshot.exists()) {
        let data = snapshot.val();

        // Ensure all attributes exist
        const updatedData = { ...defaultData, ...data };

        // If any attribute is missing, update Firebase
        if (JSON.stringify(data) !== JSON.stringify(updatedData)) {
          await set(ref(database, "contact_info"), updatedData);
        }

        setContactData(updatedData);
      } else {
        // Insert default data if nothing exists in Firebase
        await set(ref(database, "contact_info"), defaultData);
        setContactData(defaultData);
      }
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchContactData();
  }, [fetchContactData]);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #ffcccc, #ff6666)",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Container>
        {/* Page Title */}
        <h2 className="text-center fw-bold mb-4" style={{ color: "#8B0000" }}>
          📍 संपर्क करें - Contact Us 📍
        </h2>

        {loading ? (
          <p className="text-center fw-bold text-danger">
            डेटा लोड हो रहा है...
          </p>
        ) : (
          <Row className="g-4">
            {/* Address & Contact */}
            <Col md={6}>
              <Card className="shadow p-4 text-center border-0">
                <h4 className="fw-bold" style={{ color: "#8B0000" }}>
                  🏡 पता (Address)
                </h4>
                <p className="fs-5">{contactData.address}</p>

                <h4 className="fw-bold" style={{ color: "#8B0000" }}>
                  📞 संपर्क (Contact)
                </h4>
                {contactData.contact_numbers.map((number, index) => (
                  <p className="fs-5" key={index}>
                    <FaPhone color="green" /> <b>{number}</b>
                  </p>
                ))}

                <h4 className="fw-bold" style={{ color: "#8B0000" }}>
                  📸 Instagram
                </h4>
                <p className="fs-5">
                  <FaInstagram color="#C13584" />{" "}
                  <a
                    href={`https://www.instagram.com/${contactData.instagram.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#C13584" }}
                  >
                    {contactData.instagram}
                  </a>
                </p>

                <h4 className="fw-bold" style={{ color: "#8B0000" }}>
                  ✉️ ईमेल (Email)
                </h4>
                <p className="fs-5">
                  <MdEmail color="blue" />{" "}
                  <a
                    href={`mailto:${contactData.email}`}
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    {contactData.email}
                  </a>
                </p>
              </Card>
            </Col>

            {/* Google Map Embed */}
            <Col md={6}>
              <Card className="shadow border-0">
                <iframe
                  title="Temple Location"
                  src={contactData.google_map_link}
                  width="100%"
                  height="350"
                  style={{ border: "0", borderRadius: "10px" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Card>
            </Col>
          </Row>
        )}
      </Container>

      <PlacesToVisit />
    </div>
  );
}

export default Contact;
