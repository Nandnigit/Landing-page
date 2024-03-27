import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "./assest/logo";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [hideNav, setHideNav] = useState(false);
  const location = useLocation();


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    let path = location.pathname;
    if(path === '/login' || path === '/register' || path === '/dashboard'){
      setHideNav(true)
    }
    else {
      setHideNav(false)
    }
  }, [location])

  return (
    <>
      <nav className={`${showMenu ? "show-menu" : ""} ${hideNav && 'remove-nav'} `} id="navbar-start">
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
            <div className="dropdown">
              <Link to="#"> Library </Link>
      <i className="fa fa-caret-down"></i>
    <div className="dropdown-content">
      <Link to="/Newsletter">Newsletter</Link>
      <Link to="/Template">Template</Link>
      <Link to="/Framework">Framework</Link>
      <Link to="/Youtube">Youtube</Link>
    </div>
  </div>
          </li>
          <li className="nav-link-navbar">
            <div className="dropdown">
              <Link to="#"> CRAFTs </Link>
      <i className="fa fa-caret-down"></i>
    <div className="dropdown-content">
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
