import { motion } from "framer-motion";

const AnimatedTransition = ({ children }) => {
  return (
    <motion.div
      id="body"
      className="flex-1 flex flex-col items-center"
      initial={{ opacity: 0, transition: { duration: 0 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTransition;
