import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/About";
import Navigationbar from "./components/Navigationbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="content">
      <Navigationbar />
      <div>
        <Router>
          <Routes>
            <Route index element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;