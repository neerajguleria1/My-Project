import { motion } from "framer-motion";

const partners = [
  { name: "IBM", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaI2NJypkYQTC_J-ntzqt8AbXH9nqEdb2ljA&" },
  { name: "Google", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfo1g-pyHbY7fZdnxKMNqeYItybCoW5DYxrw&" },
  { name: "Microsoft", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7alL-nhGRj-YMSfWUeADaSfSduV8nEi2HZQ&" },
  { name: "Amazon", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9cSP40D_buq5MLvJkJufkkJV3tRqudouBg&" },
  { name: "HCL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHiYIW8Z78L8MKIud0C4qE8FoFu5dFcjl1ug&" },
  { name: "TCS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHZ8-3C7PyuoDnbbqXNVieMMlqXYCkN9Yfg&" },
];

const OurPartners = () => {
  return (
    <div className="py-16 text-center bg-gradient-to-r from-blue-300 to-purple-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Partners</h2>
      <div className="overflow-x-auto whitespace-nowrap px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex space-x-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurPartners;
