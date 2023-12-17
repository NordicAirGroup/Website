import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Hero from "./pages/hero";
import Privacy from "./pages/privacy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/contact";
import OurStory from "./pages/ourstory";
import Clients from "./pages/clients";
import Services from "./pages/services";
import Aviation from "./pages/aviation";
import Referrals from "./pages/referrals";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ourstory" element={<OurStory />} />
        <Route path="clients" element={<Clients />} />
        <Route path="services" element={<Services />} />
        <Route path="aviation" element={<Aviation />} />
        <Route path="referrals" element={<Referrals />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
