import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const SuggestionForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_w2qjcun", // Your Service ID
        "template_ccu7d7o", // Your Template ID
        formData,
        "EjOL9VEGCWip0nZZt" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ सुझाव सफलतापूर्वक भेजा गया!");
          setFormData({ from_name: "", from_email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ सुझाव भेजने में विफल। कृपया पुनः प्रयास करें।");
        }
      );
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="p-4 shadow-lg rounded border bg-white" style={{ maxWidth: "500px", width: "100%", borderTop: "5px solid #D32F2F" }}>
        <h2 className="text-center fw-bold" style={{ color: "#D32F2F", fontFamily: "'Merriweather', serif" }}>
          🔥 माँ खेरापति नव दुर्गा उत्सव 🙏
        </h2>
        <h4 className="text-center fw-bold mb-3 text-dark">💡 अपना सुझाव साझा करें</h4>

        {status && <p className="text-center fw-bold text-success">{status}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold text-danger">🙏 आपका नाम</label>
            <input
              type="text"
              name="from_name"
              className="form-control border-danger"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold text-danger">📧 आपकी ईमेल आईडी</label>
            <input
              type="email"
              name="from_email"
              className="form-control border-danger"
              value={formData.from_email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold text-danger">📝 आपका सुझाव</label>
            <textarea
              name="message"
              className="form-control border-danger"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn w-100 fw-bold text-white" style={{ background: "#D32F2F" }}>
            <FaPaperPlane /> सुझाव भेजें
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuggestionForm;
