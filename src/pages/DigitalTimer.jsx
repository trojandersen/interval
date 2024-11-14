import AbortBtn from "../components/AbortBtn.jsx";
import Navbar from "../components/Navbar.jsx";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import { motion } from "framer-motion";

function DigitalTimer() {
  const { digitalTime, isRunning } = useContext(TimerContext); // Access to TimerContext functions

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center flex-col gap-10"
      >
        <section className="flex flex-col items-center gap-2 text-xl">
          <p>Digital Timer</p>
          <p>{digitalTime}</p>
          <p>{isRunning ? "Timer Running..." : "Paused"}</p>
        </section>
        <AbortBtn />
      </motion.main>
    </>
  );
}

export default DigitalTimer;
