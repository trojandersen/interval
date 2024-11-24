import clockFace from "../assets/clock.svg";
import clockMinuteHandle from "../assets/clockMinuteHandle.svg";
import clockSecondHandle from "../assets/clockSecondHandle.svg";
import { motion } from "framer-motion";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

function AnalogClock() {
  const { minutes, seconds } = useContext(TimerContext);

  const minuteDegrees = (minutes % 60) * 6 + (seconds / 60) * 6;
  const secondDegrees = seconds * 6;

  return (
    <main>
      <section className="relative flex items-center justify-center min-w-[360px]">
        <img src={clockFace} />
        <motion.img
          src={clockMinuteHandle}
          className="absolute top-[3%] left-[47%]"
          style={{ transformOrigin: "bottom center" }}
          animate={{
            rotate: minuteDegrees,
          }}
          transition={{
            ease: "linear",
          }}
        />
        <motion.img
          src={clockSecondHandle}
          className="absolute top-[3%] left-[48.5%]"
          style={{ transformOrigin: "bottom center" }}
          animate={{
            rotate: secondDegrees,
          }}
          transition={{
            ease: "linear",
          }}
        />
      </section>
    </main>
  );
}

export default AnalogClock;
