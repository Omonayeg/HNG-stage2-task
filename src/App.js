import "./styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import Footer from "../src/components/Footer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

