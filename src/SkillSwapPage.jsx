import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillSwapPage = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar" style={styles.sidebar}>
        <span className="logo" style={styles.logo}>LEARNING PLATFORM</span>
        <a href="http://127.0.0.1:5500/templates/userprofile.html" style={styles.sidebarLink}>Profile</a>
        <a href="#Courses" style={styles.sidebarLink}>Courses</a>
        <a href="https://mydiscussions.ccbp.tech/" style={styles.sidebarLink}>My Discussions</a>
        <a href="https://ibmjobboard.ccbp.tech/" style={styles.sidebarLink}>Job Board</a>
        <a href="https://ibmplayground.ccbp.tech/" style={styles.sidebarLink}>Playground</a>
        <a href="https://ibmcontact.ccbp.tech/" style={styles.sidebarLink}>Contact Support</a>
      </div>

      {/* Main Content */}
      <div className="home-card-container" style={styles.homeCardContainer}>
        <h1>Welcome to Upskilling</h1>
        <br />
        {renderCardRow([
          {
            title: "Full Stack Development",
            image:
              "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg",
            details: ["Front-End Development", "Back-End Development"],
          },
          {
            title: "Data Science",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hnCAoyxDEhBz2Yh7n8n97l8VB4GvK32H_0sLZo5u9pa-lCazY37DtHE7tFYv_jEtKrs&",
            details: ["Advanced Data Science", "Data Science at Scale"],
          },
          {
            title: "AI/ML",
            image:
              "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg",
            details: ["Fundamentals of ML", "Supervised ML Algorithms"],
          },
        ])}
        {renderCardRow([
          {
            title: "Cyber Security",
            image:
              "https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg",
            details: [
              "Learn to build modern websites using HTML, CSS, and JavaScript.",
            ],
          },
          {
            title: "Blockchain",
            image:
              "https://www.ntu.edu.sg/images/default-source/hub-programmes/scse/msc_datasc2_web775x465.jpg?sfvrsn=4dba8fec_5",
            details: [
              "Master the skills to analyze and visualize data for informed decision-making.",
            ],
          },
          {
            title: "Mobile App Development",
            image:
              "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg",
            details: [
              "Create mobile apps for iOS and Android using popular frameworks.",
            ],
          },
        ])}
      </div>
    </div>
  );
};

const renderCardRow = (cards) => (
  <div className="card-container" style={styles.cardContainer}>
    <div className="container" style={styles.container}>
      {cards.map((card, index) => (
        <div className="course-card" key={index} style={styles.courseCard}>
          <img src={card.image} alt={card.title} style={styles.cardImage} />
          <h2>{card.title}</h2>
          {card.details.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <button className="unlock-button" style={styles.unlockButton}>
            Unlock
          </button>
        </div>
      ))}
    </div>
  </div>
);

const styles = {
  sidebar: {
    height: "100%",
    width: "250px",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#333",
    overflowX: "hidden",
    paddingTop: "20px",
  },
  logo: {
    display: "block",
    textAlign: "center",
    color: "white",
    padding: "15px",
    fontSize: "1.5em",
    textDecoration: "none",
  },
  sidebarLink: {
    padding: "10px 16px",
    fontSize: "1.2em",
    color: "white",
    display: "block",
    textDecoration: "none",
    transition: "0.3s",
  },
  homeCardContainer: {
    marginLeft: "250px",
    padding: "20px",
  },
  cardContainer: {
    backgroundColor: "#f4f4f4",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    flexWrap: "wrap",
    gap: "20px",
  },
  courseCard: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "30%",
    position: "relative",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  cardImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  unlockButton: {
    display: "none",
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "8px 16px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default SkillSwapPage;
