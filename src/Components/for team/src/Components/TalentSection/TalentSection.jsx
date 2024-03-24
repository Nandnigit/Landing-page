import React from "react";

import './Talent.css'

function Talentsection(){
  return(
    <>
      <div className="Talent-section">
        <div className="Talent-Content">
            <div className="talent-heading-img">
                <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d613562f383ed81c6dec_timeline-1.svg" alt="" />
            </div>
            <div className="talent-para">
               <p>Tap into the Top 1% Talent</p>
            </div>
            <div className="Talent-Heading">
                <h2>
                GrowthX Talent
                </h2>
            </div>
            <div className="talent-text">
                <p>GrowthX is a social learning platform for the top 1% Talent.</p>
                <p>
                We help companies hire the top product, growth and marketing talent to build their dream team.
                </p>
            </div>

            <div className="talent-video-section">
                <div className="talent-video-text">
                    <h3>The best should work with the best.</h3>
                    <p>As one of the fastest-growing hiring networks, we offer a simplified hiring process and access to a carefully selected pool of top-tier talent in product, growth, and marketing. Book a call today to learn more about how we can help you achieve your hiring goals.</p>
                </div>
                <div className="talent-video">
                    <video controls loop
                    src="https://dtoz3qm0nr91u.cloudfront.net/talentdd_v2.mp4">
                        
                    </video>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Talentsection;