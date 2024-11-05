import clock from "../assets/clock.svg";
import clockHourHandle from "../assets/clockHourHandle.svg";
import { motion } from "framer-motion";

function AnalogClock() {
  return (
    <motion.main>
      <section className="flex items-center">
        <img src={clock} />
        <motion.img src={clockHourHandle} className="absolute"></motion.img>
      </section>
    </motion.main>
  );
}

export default AnalogClock;
