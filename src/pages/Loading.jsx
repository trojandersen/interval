// import "./styles/Loading.css";
import logoWhite from "../assets/logoWhite.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Loading() {
  return (
    <main className="loading">
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
      <h2 className="loading__title">INTERVAL</h2>
      <p className="loading__text">For all your timing needs</p>
    </main>
  );
}

export default Loading;
