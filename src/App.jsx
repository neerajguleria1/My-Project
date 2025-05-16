import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/global.css"; // Ensure this file exists in the styles folder
import Login from "./Login"; 
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs"; 
import OurServices from "./OurServices"; 
import OurPartners from "./OurPartners"; 
import OurCurriculum from "./OurCurriculm";
import SkillSwapPage from "./SkillSwapPage";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
      <a className="navbar-brand nav-logo-title"><b>Skill Verse</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Our Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/partners">Our Partners</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/curriculum">Curriculum</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
        </ul>
        <Link className="nav-item nav-link nav-items-login-button" to="/login">Login</Link>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <section id="home" className="home-section text-center">
    <div className="animated-background"></div>
    <div className="container">
      <h1 className="home-section-heading">Welcome to SkillSwap</h1>
      <p className="home-section-paragraph">Skillverse is a platfrom where you can buy premium courses at affordable prices</p>
       <Link to="/skill-swap" className="btn btn-primary" >Get Started</Link>

    </div>
  </section>
);



const Footer = () => (
  <footer className="footer-section text-center">
    <div className="container">
      <div className="social-icons">
        <a href="#" className="fab fa-facebook"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <a href="#" className="fab fa-youtube"></a>
      </div>
      
    </div>
  </footer>
);

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} /> {/* ✅ Added ContactUs */}
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/partners" element={<OurPartners />} />
           <Route path="/skill-swap" element={<SkillSwapPage />} />
          <Route path="/curriculum" element={<OurCurriculum />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
