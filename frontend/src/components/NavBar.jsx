import { Link } from "react-router-dom";
import "../css/Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">moviepal</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/watchlater" className="nav-link">
          Watch later
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
