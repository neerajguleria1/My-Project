import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-100"
    >
      {/* Animated Card */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white shadow-xl rounded-xl p-8 max-w-3xl text-center"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">About Us</h2>
        <p className="text-gray-700 text-lg mb-6">
          SkillSwap is a **community-driven platform** that connects individuals to **exchange skills, share knowledge, and grow together**.  
          Whether you're a beginner or an expert, our platform fosters **learning, collaboration, and networking**.
        </p>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">🎯 Our Vision</h3>
          <p className="text-gray-600 text-base">
            To build a world where **knowledge and skills** are **freely accessible to everyone**, breaking barriers and creating **endless opportunities**.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">🚀 Our Mission</h3>
          <p className="text-gray-600 text-base">
            Empower individuals by **providing a platform** for **collaborative learning, mentorship, and career growth**.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">💡 Core Values</h3>
          <ul className="text-gray-600 text-base list-disc list-inside">
            <li><span className="font-medium">Collaboration:</span> We believe in the power of shared learning.</li>
            <li><span className="font-medium">Growth:</span> Continuous learning leads to success.</li>
            <li><span className="font-medium">Innovation:</span> Creativity fuels progress.</li>
            <li><span className="font-medium">Diversity:</span> Everyone has unique skills to share.</li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Join Our Community
        </motion.button>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 text-center text-gray-600 text-sm"
      >

      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
