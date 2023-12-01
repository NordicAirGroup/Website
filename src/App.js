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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
