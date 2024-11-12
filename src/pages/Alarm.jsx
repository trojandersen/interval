import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";
import alarm from "../assets/alarm.svg";
import { useState } from "react";

function Alarm() {
  const [isFinalAnimation, setIsFinalAnimation] = useState(false);

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center flex-col gap-10 "
      >
        <motion.img
          initial={{ scale: 1.1, rotate: 10 }}
          animate={
            isFinalAnimation
              ? { scale: 1, rotate: 0 }
              : { scale: 1.1, rotate: -10 }
          }
          transition={{
            type: "spring",
            repeat: isFinalAnimation ? 0 : 5,
            duration: 0.4,
            repeatType: "mirror",
          }}
          onAnimationComplete={() => setIsFinalAnimation(true)}
          src={alarm}
          alt="alarm"
        />
        <h1 className="text-2xl">Times up!</h1>
      </motion.main>
    </>
  );
}

export default Alarm;
