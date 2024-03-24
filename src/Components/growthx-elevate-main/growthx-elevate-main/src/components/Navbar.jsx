import React from "react";
import logo from "../assets/logo.svg";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const closeMenuOnMobile = () => {
  //   if (window.innerWidth <= 991) {
  //     setShowMenu(false);
  //   }
  // };

  return (
    <>
      <nav className={`${showMenu ? "show-menu" : ""}`}>
        <a href="/" id="nav-logo">
          <img src={logo} alt="logo" height="33" loading="lazy" />
        </a>
        <ul className={`menu-list ${showMenu ? "menu-open" : "menu-close"}`}>
          <li className="nav-link">
            <a href="/">Learning</a>
          </li>
          <li className="nav-link">
            <a href="/">Community</a>
          </li>
          <li className="nav-link">
            <a href="/">Outcomes</a>
          </li>
          <li className="nav-link">
            <a href="/">ELEVATE</a>
          </li>
          <li className="nav-link">
            <a href="/">For Teams</a>
          </li>
          <li className="nav-link">
            <a href="/">Limited Experience</a>
          </li>
          <li className="nav-link">
            <a href="/">Library</a>
          </li>
          <li className="nav-link">
            <a href="/">CRAFTs</a>
          </li>
          <li className="nav-link">
            <a href="/">Login</a>
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
