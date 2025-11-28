import { motion } from "framer-motion";

const Character = ({ sprite }) => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      style={{
        width: "600px",
        height: "300px",
        backgroundImage: `url(${sprite})`,
        backgroundSize: "cover",
      }}
    />
  );
};

export default Character;
