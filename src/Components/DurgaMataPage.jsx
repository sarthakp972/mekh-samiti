
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DurgaMataPage() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #ffcccc, #ff6666)", // Red Gradient
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Container>
        {/* Page Title */}
        <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#8B0000", // Dark Red
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          माँ खगपति माता की मढ़िया – ग्रामवासियों की श्रद्धा का केंद्र
        </h2>

        <Row className="justify-content-center">
          {/* Left Side - Image */}
          <Col md={5} className="text-center">
            <img
              src="https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/dgk6stguso9sdxizsc9z.jpg"
              alt="Khagpati Mata"
              className="img-fluid rounded shadow"
              style={{
                border: "5px solid #b30000", // Deep Red Border
                borderRadius: "15px",
              }}
            />
            <p className="mt-2" style={{ color: "#660000", fontWeight: "bold" }}>
              माँ खगपति माता की पवित्र मूर्ति
            </p>
          </Col>

          {/* Right Side - Content */}
          <Col md={7}>
            <Card
              className="shadow border-0 p-4"
              style={{
                background: "rgba(255, 230, 230, 0.8)", // Light Red Transparent
                borderLeft: "8px solid #8B0000",
              }}
            >
              <Card.Body>
                <p className="fs-5" style={{ color: "#660000" }}>
                  मेव की सबसे प्राचीन <strong>माँ खगपति माता की मढ़िया</strong>
                  समस्त ग्रामवासियों की श्रद्धा एवं भक्ति का केंद्र रही है। माता की
                  असीम कृपा से यहाँ भक्तों की सभी मनोकामनाएँ पूर्ण होती हैं।
                </p>
                <p className="fs-5" style={{ color: "#660000" }}>
                  प्रत्येक वर्ष माँ की मढ़िया पर <strong>भक्तों द्वारा उत्सव</strong> बड़े ही
                  धूमधाम से मनाया जाता है। इसी क्रम में <strong>2 मार्च 2013</strong> को
                  <strong> &quot;मा खेरापति नव दुर्गोत्सव समिति&quot; </strong> का गठन किया गया।
                  ग्राम के प्रतिष्ठित व्यक्तियों ने इसमें सहमति जताई और भक्ति भाव के
                  साथ समिति की स्थापना हुई।
                </p>
                <p className="fs-5" style={{ color: "#660000" }}>
                  माँ खेरापति मड़िया पर <strong>प्रथम वर्ष माँ दुर्गा जी की विशाल प्रतिमा एवं
                  101 कलशों की स्थापना</strong> 22 मार्च 2023 को की गई। शोभायात्रा पूरे ग्राम
                  में धूमधाम से निकाली गई और सांडले घाट में माता का <strong>विसर्जन</strong> किया गया।
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Footer Image */}
        {/* <Row className="mt-5">
          <Col className="text-center">
            <img
              src="https://res.cloudinary.com/dsoppcx77/image/upload/v1740541264/Mekh-Mata/sr22emuzeopvfgen10q8.jpg"
              alt="Mata Ka Mandir"
              className="img-fluid rounded shadow"
              style={{
                border: "5px solid #b30000",
                borderRadius: "15px",
              }}
            />
            <p className="mt-2" style={{ color: "#660000", fontWeight: "bold" }}>
              माँ खगपति माता का दिव्य मंदिर
            </p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default DurgaMataPage;
