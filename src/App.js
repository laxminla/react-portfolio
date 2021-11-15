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
// import App.css from "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <Navigationbar />
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;