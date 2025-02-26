// import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Aarti() {
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
          🙏 माँ की आरतियाँ 🙏
        </h2>

        {/* Accordion for Aarti */}
        <Accordion defaultActiveKey="0">
          {/* Aarti 1 - Jai Ambe Gauri */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              🌺 जय अम्बे गौरी - माँ दुर्गा की आरती 🌺
            </Accordion.Header>
            <Accordion.Body>
              <p>
                जय अम्बे गौरी, मैया जय श्यामा गौरी। <br />
                तुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी॥ <br />
                अम्बे गौरी, जय अम्बे गौरी॥
              </p>
              <p>
                माई रे मैं तो छूटा घर से आई, <br />
                माता तेरे चरणों की दासी, <br />
                तेरी शरण में आई।।
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Aarti 2 - Om Jai Jagdish Hare */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              🌿 ॐ जय जगदीश हरे - भगवान की आरती 🌿
            </Accordion.Header>
            <Accordion.Body>
              <p>
                ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे। <br />
                भक्त जनों के संकट, दास जनों के संकट, क्षण में दूर करे॥
              </p>
              <p>
                जो ध्यावे फल पावे, दुःख विनसे मन का। <br />
                स्वामी दुःख विनसे मन का, सुख संपत्ति घर आवे॥
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Aarti 3 - Durga Chalisa */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              🔥 दुर्गा चालीसा - माँ दुर्गा स्तुति 🔥
            </Accordion.Header>
            <Accordion.Body>
              <p>
                नमन करूँ माता तुझको बारम्बार, <br />
                विनती करूँ मैं चरणों में अपार॥ <br />
                दुर्गा चालीसा पढ़ जो कोई, <br />
                संकट दूर करे भव मोही॥
              </p>
              <p>
                जय जय माँ जगदम्बे, जय जय दुर्गे माता। <br />
                संकट हरनी, सुख करनी, अम्बे माँ वरदाता॥
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Contact Information */}
        <div className="text-center mt-5">
          <h5 className="fw-bold" style={{ color: "#8B0000" }}>
            किसी भी जानकारी के लिए संपर्क करें:
          </h5>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#660000",
            }}
          >
            📞 +91 98765 43210 <br />
            📞 +91 91234 56789
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Aarti;
