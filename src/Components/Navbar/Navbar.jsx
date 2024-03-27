import React from "react";
import { Link } from "react-router-dom";
// import logo from "./assest/logo";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`${showMenu ? "show-menu" : ""}`} id="navbar-start">
        <Link to="/" id="nav-logo">
          {/* <img src={logo} alt="logo" height="33" loading="lazy" /> */}
        </Link>
        <ul className={`menu-list ${showMenu ? "menu-open" : "menu-close"}`}>
          <li className="nav-link-navbar">
            <Link to="/learning">Learning</Link>
          </li>
          <li className="nav-link-navbar">
            <Link to="/community">Community</Link>
          </li>
          <li className="nav-link-navbar">
            <Link to="/outcomes">Outcomes</Link>
          </li>
          <li className="nav-link-navbar">
            <Link to="/elevate">ELEVATE</Link>
          </li>
          <li className="nav-link-navbar">
            <Link to="/for-teams">For Teams</Link>
          </li>
          <li className="nav-link-navbar">
            <Link to="/limited-experience">Limited Experience</Link>
          </li>
          <li className="nav-link-navbar">
            {/* <Link to="/library">Library</Link> */}
            <div class="dropdown">
              <Link to="#"> Library </Link>
      <i class="fa fa-caret-down"></i>
    <div class="dropdown-content">
      <Link to="/Newsletter">Newsletter</Link>
      <Link to="/Template">Template</Link>
      <Link to="/Framework">Framework</Link>
      <Link to="/Youtube">Youtube</Link>
    </div>
  </div>
          </li>
          <li className="nav-link-navbar">
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
          <li className="nav-link-navbar">
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
