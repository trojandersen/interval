import Navbar from "../components/Navbar.jsx";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import { motion } from "framer-motion";
import { TimerContext } from "../contexts/TimerContext";
import { useState, useContext } from "react";

function SetTimer() {
  const { startTimer, isRunning } = useContext(TimerContext); // Access to TimerContext functions
  const [minutes, setMinutes] = useState(10); // Default starting time in minutes

  // Function to decrease or increase minutes with arrow icons
  const handleArrowClick = (direction) => {
    setMinutes((prev) => {
      const newMinutes = direction === "increment" ? prev + 1 : prev - 1;
      return newMinutes < 0 ? 0 : newMinutes; // Prevent negative minutes
    });
  };

  // Function to start the timer based on selected minutes
  const startCountdown = () => {
    startTimer(minutes); // Start the timer with the selected minutes
  };

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center flex-col gap-10"
      >
        <section className="flex gap-10">
          <img
            src={arrowLeft}
            onClick={() => handleArrowClick("decrement")}
            className="cursor-pointer"
          />
          <section className="flex items-center flex-col">
            <h1>{minutes}</h1>
            <h3>minutes</h3>
          </section>
          <img
            src={arrowRight}
            onClick={() => handleArrowClick("increment")}
            className="cursor-pointer"
          />
        </section>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={startCountdown}
          className="border-2 border-black p-5 rounded-md shadow-md text-xl"
          disabled={isRunning}
        >
          {isRunning ? "Timer Running" : "Start Timer"}
        </motion.button>
      </motion.main>
    </>
  );
}

export default SetTimer;
