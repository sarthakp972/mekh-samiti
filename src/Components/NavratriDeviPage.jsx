
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const devis = [
  {
    name: "माँ शैलपुत्री",
    description:
      "माँ शैलपुत्री नवदुर्गा का पहला स्वरूप हैं। यह हिमालय राज की पुत्री मानी जाती हैं। इनके पूजन से शांति और मानसिक बल प्राप्त होता है।",
    image: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740551507/shelputri_gmk9du.jpg",
  },
  {
    name: "माँ ब्रह्मचारिणी",
    description:
      "माँ ब्रह्मचारिणी नवदुर्गा का दूसरा स्वरूप हैं। यह कठिन तपस्या की देवी हैं और इनके पूजन से साधना शक्ति मिलती है।",
    image: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740551507/bramcharini_ixuvau.jpg",
  },
  {
    name: "माँ चंद्रघंटा",
    description:
      "माँ चंद्रघंटा नवदुर्गा का तीसरा स्वरूप हैं। यह युद्ध की देवी मानी जाती हैं। इनका पूजन करने से शत्रुओं पर विजय प्राप्त होती है।",
    image: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740551507/chandraghanta_keoufl.jpg",
  },
  {
    name: "माँ कूष्मांडा",
    description:
      "माँ कूष्मांडा नवदुर्गा का चौथा स्वरूप हैं। यह ब्रह्मांड की उत्पत्ति करने वाली देवी हैं और इनके पूजन से आयु और आरोग्य प्राप्त होता है।",
    image: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740551507/kushmanda_kehpkg.jpg",
  },
  {
    name: "माँ स्कंदमाता",
    description:
      "माँ स्कंदमाता नवदुर्गा का पाँचवा स्वरूप हैं। यह भगवान कार्तिकेय की माता मानी जाती हैं और इनके पूजन से परिवार में सुख-शांति आती है।",
    image: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740551507/skandmata_pyqedp.jpg",
  },
  {
    name: "माँ कात्यायनी",
    description:
      "माँ कात्यायनी नवदुर्गा का छठा स्वरूप हैं। यह शक्ति की देवी मानी जाती हैं और इनके पूजन से विवाह में आ रही बाधा दूर होती है।",
    image: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740551506/katyani_uecmbb.jpg",
  },
  {
    name: "माँ कालरात्रि",
    description:
      "माँ कालरात्रि नवदुर्गा का सातवां स्वरूप हैं। यह राक्षसों का नाश करने वाली देवी हैं और इनका पूजन करने से भय और शत्रु दूर होते हैं।",
    image: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740551507/kalratri_vhffos.jpg",
  },
  {
    name: "माँ महागौरी",
    description:
      "माँ महागौरी नवदुर्गा का आठवां स्वरूप हैं। यह करुणा और शांति की देवी मानी जाती हैं और इनका पूजन करने से सभी पापों का नाश होता है।",
    image: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740551506/mahagori_dbeqa6.jpg",
  },
  {
    name: "माँ सिद्धिदात्री",
    description:
      "माँ सिद्धिदात्री नवदुर्गा का नवां स्वरूप हैं। यह सभी सिद्धियों को देने वाली देवी हैं और इनके पूजन से मोक्ष की प्राप्ति होती है।",
    image: "https://res.cloudinary.com/dsoppcx77/image/upload/v1740551506/sidhratri_g286r0.jpg",
  },
];

function NavratriDeviPage() {
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
          नवरात्रि के 9 देवी स्वरूप
        </h2>

        {/* Devi Cards */}
        <Row>
          {devis.map((devi, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card
                className="shadow text-center"
                style={{
                  background: "rgba(255, 230, 230, 0.9)", // Light Red Transparent
                  border: "4px solid #8B0000",
                  borderRadius: "15px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={devi.image}
                  alt={devi.name}
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#8B0000",
                      fontWeight: "bold",
                    }}
                  >
                    {devi.name}
                  </Card.Title>
                  <Card.Text style={{ color: "#660000" }}>
                    {devi.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NavratriDeviPage;
