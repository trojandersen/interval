import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// TODO: need to fix abortCountdown
function AbortBtn() {
  const navigate = useNavigate();
  const abortCountdown = () => {
    navigate("/set-timer");
  };
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={abortCountdown}
      className="text-gray-400 border-solid border-2 p-5 rounded-md shadow-md"
    >
      ABORT TIMER
    </motion.button>
  );
}

export default AbortBtn;
