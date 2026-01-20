import { motion } from "framer-motion";

const MotionLoader = () => {
  return (
    <div className="fullscreen-loader">
      <motion.div
        className="pulse-circle"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default MotionLoader;
