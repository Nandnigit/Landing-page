import React from "react";
import './Footer.css';
function Footer(){
    return(
        <footer>
        <div className="row1">
        <div className="footer-title">
        <h2 class="first">Growth <span>X</span></h2>
        <p>GrowthX Education Labs Private Limited</p>
        </div>
        <div className="footer-menus">
        <a href="#" class="a1">
          Get in touch
        </a>
        <a href="#" class="a1">
          Terms & Conditions
        </a>
        <a href="#" class="a1">
          Privacy Policy
        </a>
        <a href="#" class="a1">
          We're hiring
        </a>
        </div>
        <div className="footer-icons">
        <i class="fa-brands fa-instagram a1"></i>
        <i class="fa-brands fa-linkedin a1"></i>
        <i class="fa-brands fa-twitter a1"></i>
        </div>
        </div>
        <hr />
       <div className="row2">
       <a href="#" class="a2">
          Chrome Extension
        </a>
        <a href="#" class="a2">
          Growth Shorts
        </a>
        <a href="#" class="a2">
          Capstone
        </a>
        <a href="#" class="a2">
          Community
        </a>
        <a href="#" class="a2">
          Membership Guide
        </a>
        <a href="#" class="a2">
          Origin story
        </a>
       </div>
      </footer>
    )
} 
export default Footer;