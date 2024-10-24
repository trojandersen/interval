import "./styles/Loading.css";
import logoWhite from "../assets/logoWhite.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Loading() {
  return (
    <main className="loading">
      <Link to="/set-timer">
        <motion.img src={logoWhite} />
      </Link>
      <h2 className="loading__title">INTERVAL</h2>
      <p className="loading__text">For all your timing needs</p>
    </main>
  );
}

export default Loading;
