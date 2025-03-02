
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
          माँ खेरापति  माता की मढ़िया – ग्रामवासियों की श्रद्धा का केंद्र
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
             माता की मूर्ति
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
                मेख की सबसे प्राचीन   <strong> मां खेरापति  माता </strong> की मढ़िया समस्त ग्रामवासियों की माता के प्रति भक्ति एवं भक्तों पर माता की कृपा सदैव बनी हुई है |

               

            
                </p>
                <p className="fs-5" style={{ color: "#660000" }}>
                प्रत्येक वर्ष मढ़िया पर भक्तों के द्वारा सभी धार्मिक कार्यक्रमों को उत्साह पूर्वक मनाया जाता है इसी क्रम में 1 मार्च 2023 को एक समिति, मां खेरापति नव दुर्गोत्सव समिति गठित की, जिसमें ग्राम के प्रतिष्ठित व्यक्तियों द्वारा सहमति जताई गई।
                </p>
                <p className="fs-5" style={{ color: "#660000" }}>
                  माँ खेरापति मड़िया पर <strong>प्रथम वर्ष माँ दुर्गा जी की विशाल प्रतिमा एवं
                  101 कलशों की स्थापना</strong> 22 मार्च 2023 को की गई। शोभायात्रा पूरे ग्राम
                  में धूमधाम से निकाली गई और सांडले घाट में माता का <strong>विसर्जन</strong> किया गया।
                  {/* <strong>Read More....</strong> */}
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
