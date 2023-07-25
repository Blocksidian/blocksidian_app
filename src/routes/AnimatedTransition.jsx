import { motion } from "framer-motion";

const AnimatedTransition = ({ children }) => {
  return (
    <motion.div className="flex-1 flex flex-col items-center justify-center"
      initial={{ opacity: 0, transition: { duration: 0 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTransition;
