import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import './Footer.css';
function Footer(){

  const [hideFoot, setHideFoot] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const path = location.pathname;
    if(path === '/login' || path === '/register' || path === '/dashboard'){
      setHideFoot(true)
    }
    else {
      setHideFoot(false)
    }
  }, [location])

    return(
        <footer className={`${hideFoot && 'remove-foot'}`}>
        <div className="row1">
        <div className="footer-title">
        {/* <h2 className="footer_first">Growth <span>X</span></h2> */}
        <p>GrowthX Education Labs Private Limited</p>
        </div>
        <div className="footer-menus">
        <a href="#" className="a1">
          Get in touch
        </a>
        <a href="#" className="a1">
          Terms & Conditions
        </a>
        <a href="#" className="a1">
          Privacy Policy
        </a>
        <a href="#" className="a1">
          We're hiring
        </a>
        </div>
        <div className="footer-icons">
        <i className="fa-brands fa-instagram a1"></i>
        <i className="fa-brands fa-linkedin a1"></i>
        <i className="fa-brands fa-twitter a1"></i>
        </div>
        </div>
        <hr />
       <div className="row2">
       <a href="#" className="a2">
          Chrome Extension
        </a>
        <a href="#" className="a2">
          Growth Shorts
        </a>
        <a href="#" className="a2">
          Capstone
        </a>
        <a href="#" className="a2">
          Community
        </a>
        <a href="#" className="a2">
          Membership Guide
        </a>
        <a href="#" className="a2">
          Origin story
        </a>
       </div>
      </footer>
    )
} 
export default Footer;