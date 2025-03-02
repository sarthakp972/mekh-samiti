import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import {  FaUsers, FaDonate } from "react-icons/fa";
import { database, ref, get } from "../firebaseConfig"; // Import Firebase database

function About() {
  const [members, setMembers] = useState([]);

  // Fetch members' names from Firebase
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const snapshot = await get(ref(database, "samiti_sadashya"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const membersArray = Object.values(data).map((member) => member.name); // Extract only names
          setMembers(membersArray);
        } else {
          setMembers([]);
        }
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div style={{ background: "#fff3f3", minHeight: "100vh", padding: "40px 0" }}>
      <Container>
        {/* Page Title */}
        <h2 className="text-center fw-bold mb-4" style={{ color: "#8B0000" }}>
          🙏 समिति के बारे में - About Us 🙏
        </h2>

        {/* About Samiti */}
        <Card className="p-4 shadow border-0 mb-4">
          <Row className="align-items-center">
            <Col md={8}>
              <h4 className="fw-bold" style={{ color: "#8B0000" }}>📖 समिति परिचय</h4>
              <p className="fs-5">
                माँ खेरापति नव दुर्गा समिति, मेख (जिला नरसिंहपुर, मध्य प्रदेश) भक्तों द्वारा स्थापित एक धार्मिक संगठन है।
                समिति का मुख्य उद्देश्य **नवरात्रि महोत्सव**, भंडारे, कीर्तन और धार्मिक कार्यक्रमों का आयोजन करना है। 
                यह एक पवित्र स्थल है जहाँ श्रद्धालु माता के दर्शन करने और आशीर्वाद प्राप्त करने आते हैं।
              </p>
            </Col>
            <Col md={4} className="text-center">
              <Image src="https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/xvzzuxu0mqob7asfq8th.jpg" alt="Maa Durga" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Card>

        {/* Committee Members */}
        <h4 className="text-center fw-bold mb-3" style={{ color: "#8B0000" }}>🛕 समिति के मुख्य सदस्य</h4>
        <Row className="g-4">
          {members.length > 0 ? (
            members.map((name, index) => (
              <Col md={4} key={index}>
                <Card className="shadow text-center p-3 border-0">
                  <FaUsers size={50} color="#8B0000" />
                  <h5 className="mt-2 fw-bold">{name}</h5>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">कोई सदस्य सूचीबद्ध नहीं है</p>
          )}
        </Row>

        {/* Another Section with an Image */}
        <Card className="p-4 shadow border-0 my-4">
          <Row className="align-items-center">
            <Col md={4} className="text-center">
              <Image src="https://res.cloudinary.com/dsoppcx77/image/upload/v1740541264/Mekh-Mata/sr22emuzeopvfgen10q8.jpg" alt="Temple View" className="img-fluid rounded shadow" />
            </Col>
            <Col md={8}>
              <h4 className="fw-bold" style={{ color: "#8B0000" }}>🙏 श्रद्धालु और आयोजन</h4>
              <p className="fs-5">
                हर साल नवरात्रि महोत्सव के दौरान माँ खेरापति मंदिर में भक्तों की भारी भीड़ उमड़ती है। 
                इस दौरान **भजन-कीर्तन, हवन, भंडारे और सांस्कृतिक कार्यक्रमों** का आयोजन किया जाता है।
              </p>
            </Col>
          </Row>
        </Card>

        {/* Donation Section */}
        <Card className="p-4 shadow my-4 border-0 text-center">
          <h4 className="fw-bold" style={{ color: "#8B0000" }}>💰 दान करने के लिए</h4>
          <p className="fs-5">आप माता की सेवा में सहयोग कर सकते हैं। कृपया नीचे दिए गए बटन पर क्लिक करें।</p>
          <Button variant="danger" size="lg">
            <FaDonate /> दान करें (Donate Now)
          </Button>
        </Card>
      </Container>
    </div>
  );
}

export default About;
