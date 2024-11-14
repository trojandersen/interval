import clockFace from "../assets/clock.svg";
import clockHourHandle from "../assets/clockHourHandle.svg";
import clockMinuteHandle from "../assets/clockMinuteHandle.svg";
import { motion } from "framer-motion";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

function AnalogClock() {
  const { hours, minutes } = useContext(TimerContext);

  const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30; // 360° / 12 hours = 30° per hour
  const minuteDegrees = minutes * 6; // 360° / 60 minutes = 6° per minute
  //const secondDegrees = seconds * 6; // 360° / 60 seconds = 6° per second

  return (
    <main>
      <section className="relative flex items-center justify-center w-[278px] h-[278px]">
        <img className="absolute w-full h-full" src={clockFace} />
        <motion.div
          className="absolute"
          style={{
            originY: "-100%",
            top: "50%",
            left: "50%",
          }}
          animate={{ rotate: hourDegrees }}
          transition={{ duration: 0.5 }}
        >
          <img src={clockHourHandle} alt="Hour Hand" className="w-3 h-32" />
        </motion.div>
        <motion.div
          className="absolute"
          style={{
            originY: "100%",
            top: "50%",
            left: "50%",
            translate: "-50% -100%",
          }}
          animate={{ rotate: minuteDegrees }}
          transition={{ duration: 0.5 }}
        >
          <img src={clockMinuteHandle} alt="Minute Hand" className="w-2 h-40" />
        </motion.div>
      </section>
    </main>
  );
}

export default AnalogClock;
