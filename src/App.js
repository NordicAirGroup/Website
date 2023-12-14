import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Hero from "./pages/hero";
import Privacy from "./pages/privacy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="our-story" element={<Our-Story />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="services" element={<Services />} />
        <Route path="aviation" element={<Aviation />} />
        <Route path="referrals" element={<Referrals />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
