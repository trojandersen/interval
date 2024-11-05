import { motion } from "framer-motion";

function AbortBtn() {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className="text-gray-400 border-solid border-2 p-5 rounded-md shadow-md"
    >
      ABORT TIMER
    </motion.button>
  );
}

export default AbortBtn;
