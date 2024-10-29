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
    <aside ref={ref} className="">
      <Hamburger toggled={isOpen} size={35} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
          <ul className="grid gap-2"></ul>
        </div>
      )}

      {/* <Link to="/analog-timer">Analog Timer</Link>
      <Link to="/digital-timer">Digital Timer</Link> */}
    </aside>
  );
}

export default Menu;
