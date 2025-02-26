import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aarti from "./Components/Aarti";
import AnnouncementBar from "./Components/AnnouncementBar";
import DonationPage from "./Components/DonationPage";
import DurgaMataPage from "./Components/DurgaMataPage";
import Footer from "./Components/Footer";
// 
import MataJiNavbar from "./Components/Navbar";
import NavratriDeviPage from "./Components/NavratriDeviPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NoticePage from "./Pages/NoticePage";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <Router>
      <AnnouncementBar />
      <MataJiNavbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery/>} />

        <Route path="/durga-mata" element={<DurgaMataPage />} />
        <Route path="/navratri-devi" element={<NavratriDeviPage />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/aarti" element={<Aarti />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/aartiya" element={<Aarti />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
