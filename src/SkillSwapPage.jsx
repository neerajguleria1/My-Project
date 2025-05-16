import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Updated course list to include `link` for each course
const courses = [
  {
    title: "Full Stack Development",
    image: "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg",
    details: ["Front-End Development", "Back-End Development"],
    link: "https://t.me/neerajguleria4",
  },
  {
    title: "Data Science",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hnCAoyxDEhBz2Yh7n8n97l8VB4GvK32H_0sLZo5u9pa-lCazY37DtHE7tFYv_jEtKrs&",
    details: ["Advanced Data Science", "Data Science at Scale"],
    link: "https://example.com/datascience",
  },
  {
    title: "AI/ML",
    image: "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg",
    details: ["Fundamentals of ML", "Supervised ML Algorithms"],
    link: "https://example.com/aiml",
  },
  {
    title: "Cyber Security",
    image: "https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg",
    details: ["Learn to build modern websites using HTML, CSS, and JavaScript."],
    link: "https://example.com/cybersecurity",
  },
  {
    title: "Blockchain",
    image: "https://www.ntu.edu.sg/images/default-source/hub-programmes/scse/msc_datasc2_web775x465.jpg?sfvrsn=4dba8fec_5",
    details: ["Master the skills to analyze and visualize data for informed decision-making."],
    link: "https://example.com/blockchain",
  },
  {
    title: "Mobile App Development",
    image: "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg",
    details: ["Create mobile apps for iOS and Android using popular frameworks."],
    link: "https://example.com/mobileapp",
  },
];

const SkillSwapPage = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar" style={styles.sidebar}>
        <span className="logo" style={styles.logo}>LEARNING PLATFORM</span>
        <a href="#Profile" style={styles.sidebarLink}>Profile</a>
        <a href="#Courses" style={styles.sidebarLink}>Courses</a>
        <a href="https://mydiscussions.ccbp.tech/" style={styles.sidebarLink}>My Discussions</a>
        <a href="https://ibmjobboard.ccbp.tech/" style={styles.sidebarLink}>Job Board</a>
        <a href="https://ibmplayground.ccbp.tech/" style={styles.sidebarLink}>Playground</a>
        <a href="https://ibmcontact.ccbp.tech/" style={styles.sidebarLink}>Contact Support</a>
      </div>

      {/* Main Content */}
      <div style={styles.homeCardContainer}>
        <h1>Welcome to Upskilling</h1>
        <br />
        <div style={styles.cardGrid}>
          {courses.map((course, index) => (
            <div key={index} className="course-card" style={styles.courseCard}>
              <img src={course.image} alt={course.title} style={styles.cardImage} />
              <h2 style={styles.cardTitle}>{course.title}</h2>
              {course.details.map((detail, i) => (
                <p key={i} style={styles.cardText}>{detail}</p>
              ))}

              {/* ✅ Unlock button wrapped in anchor tag to navigate to the course.link */}
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                <button style={styles.unlockButton}>Unlock</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  sidebar: {
    height: "100%",
    width: "150px",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#333",
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
    textDecoration: "none",
    fontSize: "1.2em",
    color: "white",
    display: "block",
    transition: "0.3s",
  },
  homeCardContainer: {
    marginLeft: "250px",
    padding: "20px",
  },
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-between",
  },
  courseCard: {
    position: "relative",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "30%",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  cardImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  cardTitle: {
    fontSize: "1.5em",
    marginTop: "10px",
  },
  cardText: {
    marginTop: "8px",
    fontSize: "0.9em",
    color: "#777",
  },
  unlockButton: {
   // display: "none",
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

// ✅ Hover styles added using JavaScript to mimic CSS
const addHoverEffect = () => {
  const styleSheet = document.styleSheets[0];
  const styles = `
    .sidebar a:hover {
      background-color: #ddd !important;
      color: black !important;
    }
    .course-card:hover {
      transform: translateY(-5px);
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
    .course-card:hover button {
      display: block !important;
      background-color: blue;
    }
  `;
  styleSheet.insertRule(styles, styleSheet.cssRules.length);
};

if (typeof window !== "undefined") {
  window.onload = addHoverEffect;
}

export default SkillSwapPage;
