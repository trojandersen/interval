import Navbar from "../components/Navbar.jsx";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import { motion } from "framer-motion";

function SetTimer() {
  return (
    <>
      <Navbar />
      <main className="flex items-center flex-col gap-10">
        <section className="flex gap-10">
          <img src={arrowLeft} />
          <section className="flex items-center flex-col">
            <h1>10</h1>
            <h3>minutes</h3>
          </section>
          <img src={arrowRight} />
        </section>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="border-2 border-black p-5 rounded-md shadow-md text-xl"
        >
          Start Timer
        </motion.button>
      </main>
    </>
  );
}

export default SetTimer;
