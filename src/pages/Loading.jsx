// import "./styles/Loading.css";
import logoWhite from "../assets/logoWhite.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Loading() {
  return (
    <main className="w-full min-h-screen bg-black text-white flex items-center justify-center flex-col gap-1">
      <Link to="/set-timer">
        <motion.img
          src={logoWhite}
          initial={{ opacity: 0, scale: 0.5, x: "150%" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.33,
            ease: [0, 0.66, 0.33, 1],
          }}
        />
      </Link>
      <h2 className="font-Righteous text-xl">INTERVAL</h2>
      <p>For all your timing needs</p>
    </main>
  );
}

export default Loading;
