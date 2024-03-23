import React from "react";
import './Testimonial.css';
function Testinomial(){
    return(
     <div className="testimonial-container">
        <div className="testimonial">
          <div className="testimonial-section">
            <p className="testimonial-title">GROWTHX MEMBER SINCE 2021</p>
            <h2 className="testimonial-headline">
            "The best learning was the actionable template Nishchal shared. Just walk the steps on it and you have all the ingredients for your next event."
            </h2>
            <p className="description">
            Doing events is challenging as it is, doing great events is even more complicated. How do you create an event with ideal outcomes for your team, the stage of your company, your guests, and the participants? Nishchal is an Event demi-god who walked us through examples of how saas brands execute events. The best learning was the actionable template Nishchal shared. Just walk the steps on it and you have all the ingredients for your next event.
            </p>
            <div className="testimonial-name-div">
              <div className="name-div">
                <h1 id="name">Adhar Masand</h1>
                <p id="role">Director, Growth</p>
              </div>
              <div className="company-logo">
                <img
                  src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64cce56225242197982373b0_dhiwise%20(1)-p-500.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="testimonial-image-cont">
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64dc67d3eae0994a77bafc03_adhar-p-500.png"
              alt=""
            />
          </div>
        </div>
      </div> 
    );
}
export default Testinomial