import { Link } from "react-router-dom";

function Menu() {
  return (
    <aside className="flex">
      <Link to="/analog-timer"></Link>
      <Link to="/digital-timer"></Link>
      <Link to="/set-timer"></Link>
    </aside>
  );
}

export default Menu;
