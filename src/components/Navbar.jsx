import { useRef, useState } from "react";
import logoBlackHorizontal from "../assets/logoBlackHorizontal.svg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";

const variants = {
  open: { rotate: 90 },
  closed: { rotate: 0 },
};

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setDropdownOpen(false));
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav ref={ref} className="w-full sticky z-50 mb-10">
      <div className="container flex justify-between items-center p-4">
        <div className="relative">
          <motion.img
            animate={dropdownOpen ? "open" : "closed"}
            variants={variants}
            src={logoBlackHorizontal}
            onClick={toggleDropdown}
          />
          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 mt-2 w-48 bg-black rounded-lg shadow-lg"
              >
                <Link to="/set-timer">
                  <li className="p-4 text-white text-xl font-bold">
                    Set Timer
                  </li>
                </Link>
                <Link to="/analog-timer">
                  <li className="p-4 text-white text-xl font-bold">
                    Analog Timer
                  </li>
                </Link>
                <Link to="/digital-timer">
                  <li className="p-4 text-white text-xl font-bold">
                    Digital Timer
                  </li>
                </Link>
                <li className="p-4 text-slate-600 text-xl">Text Timer</li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Centered Logo / Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="tracking-widest font-Righteous text-4xl">INTERVAL</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
