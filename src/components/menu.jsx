import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";

function Menu() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  return (
    <aside ref={ref}>
      <Hamburger toggled={isOpen} size={33} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed ml-2 mt-2 bg-neutral-950 rounded-md"
          >
            <ul className="flex flex-col gap-10 pb-20 pl-20 pr-20 pt-10">
              <h2 className="text-white tracking-wider font-Righteous text-2xl">
                INTERVAL
              </h2>
              <Link to="/set-timer">
                <li className="text-white text-xl font-bold">Set Timer</li>
              </Link>
              <Link to="/analog-timer">
                <li className="text-white text-xl font-bold">Analog Timer</li>
              </Link>
              <Link to="/digital-timer">
                <li className="text-white text-xl font-bold">Digital Timer</li>
              </Link>
              <li className="text-slate-600 text-xl">Text Timer</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}

export default Menu;
