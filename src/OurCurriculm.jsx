import { FaCode, FaBrain, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const curriculum = [
  {
    title: "FullStack Development",
    icon: <FaCode className="text-blue-500 text-4xl" />, 
    topics: ["HTML, CSS, JavaScript", "React, Angular, Vue", "Node.js, Python, Java", "SQL, NoSQL, MongoDB"]
  },
  {
    title: "AI/ML Curriculum",
    icon: <FaBrain className="text-red-500 text-4xl" />, 
    topics: ["Overview of AI concepts", "Machine Learning Basics", "Supervised Learning", "Unsupervised Learning"]
  },
  {
    title: "Data Science Curriculum",
    icon: <FaDatabase className="text-green-500 text-4xl" />, 
    topics: ["Intro to Data Science", "Advanced Data Analysis", "ML for Data Science", "Big Data Processing"]
  }
];

export default function OurCurriculum() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Our Curriculum
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {curriculum.map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl" 
            whileHover={{ scale: 1.08 }}>
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
            <ul className="text-gray-600 text-left space-y-2">
              {item.topics.map((topic, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-blue-500">&#8226;</span> {topic}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
