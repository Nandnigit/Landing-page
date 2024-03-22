import React from "react";
import { Link } from "react-router-dom";
// import logo from "../Navbar/assest";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`${showMenu ? "show-menu" : ""}`}>
        <Link to="/" id="nav-logo">
          {/* <img src={logo} alt="logo" height="33" loading="lazy" /> */}
        </Link>
        <ul className={`menu-list ${showMenu ? "menu-open" : "menu-close"}`}>
          <li className="nav-link">
            <Link to="/learning">Learning</Link>
          </li>
          <li className="nav-link">
            <Link to="/community">Community</Link>
          </li>
          <li className="nav-link">
            <Link to="/outcomes">Outcomes</Link>
          </li>
          <li className="nav-link">
            <Link to="/elevate">ELEVATE</Link>
          </li>
          <li className="nav-link">
            <Link to="/for-teams">For Teams</Link>
          </li>
          <li className="nav-link">
            <Link to="/limited-experience">Limited Experience</Link>
          </li>
          <li className="nav-link">
            <Link to="/library">Library</Link>
          </li>
          <li className="nav-link">
            <div class="dropdown">
              <Link to="#"> CRAFTs </Link>
      <i class="fa fa-caret-down"></i>
    <div class="dropdown-content">
      <Link to="/Brandledgrowth">Brand LED Growth</Link>
      <Link to="/Partnershipledgrowth">Partnership LED Growth</Link>
      <Link to="/Eventledgrowth">Event LED Growth</Link>
      <Link to="/Dataledgrowth">Data LED Growth</Link>
    </div>
  </div>

          </li>
          <li className="nav-link">
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <div className="mobile-menu-container">
          <button type="button" id="member-button">
            Become a Member
          </button>
          <div id={`menu-bar`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
