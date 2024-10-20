import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import BlogContent from "./Pages/BlogContent";
import Navbar from "./Components/Navbar";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Team from "./Components/Team";

function App() {
  return (
    <section className="App">
    
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/Blog/:id" element={<BlogContent />} />
          </Routes>

          <Footer />
        </BrowserRouter>
    </section>
  );
}

export default App;
