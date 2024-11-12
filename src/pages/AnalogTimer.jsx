import AbortBtn from "../components/AbortBtn.jsx";
import AnalogClock from "../components/AnalogClock.jsx";
import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";

function AnalogTimer() {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center flex-col gap-10"
      >
        <AnalogClock />
        <AbortBtn />
      </motion.main>
    </>
  );
}

export default AnalogTimer;
