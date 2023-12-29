import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/contact";
import OurStory from "./pages/ourstory";
import Clients from "./pages/clients";
import Services from "./pages/services";
import Aviation from "./pages/aviation";
import Testamonials from "./pages/Testamonials";
import "./styles/Navbar.css";
import ScrollToAnchor from "./components/ScrollToAnchor";

function App() {
  return (
    <div className="Notification-App">
      <p> THIS WEBSITE IS CURRENTLY UNDER CONSTRUCTION</p>
      <div className="App">
        <Navbar />
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="clients" element={<Clients />} />
          <Route path="services" element={<Services />} />
          <Route path="aviation" element={<Aviation />} />
          <Route path="testamonials" element={<Testamonials />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
