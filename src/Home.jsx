import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css"; // Ensure this CSS file contains styles from your HTML page

const Home = () => {
  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <span className="logo">LEARNING PLATFORM</span>
        <Link to="/profile">Profile</Link>
        <Link to="/courses">Courses</Link>
        <a href="https://mydiscussions.ccbp.tech/">My Discussions</a>
        <a href="https://ibmjobboard.ccbp.tech/">Job Board</a>
        <a href="https://ibmplayground.ccbp.tech/">Playground</a>
        <a href="https://ibmcontact.ccbp.tech/">Contact Support</a>
      </div>

      {/* Main Content */}
      <div className="home-card-container">
        <h1>Welcome to Upskilling</h1>
        <br />
        <div className="card-container">
          <div className="container">
            {/* Course Cards */}
            <div className="course-card">
              <img src="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg" alt="Full Stack Development" />
              <h2>Full Stack Development</h2>
              <p>Front-End & Back-End Development</p>
              <button className="unlock-button">Unlock</button>
            </div>

            <div className="course-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hnCAoyxDEhBz2Yh7n8n97l8VB4GvK32H_0sLZo5u9pa-lCazY37DtHE7tFYv_jEtKrs&" alt="Data Science" />
              <h2>Data Science</h2>
              <p>Advanced Data Science & AI</p>
              <button className="unlock-button">Unlock</button>
            </div>

            <div className="course-card">
              <img src="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg" alt="AI/ML" />
              <h2>AI/ML</h2>
              <p>Supervised ML Algorithms</p>
              <button className="unlock-button">Unlock</button>
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="text-center mt-4">
          <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
