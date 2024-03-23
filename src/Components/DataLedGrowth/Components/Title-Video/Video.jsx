import React from "react";
import "./Video.css";

function Video() {
  return (
    <>
        <div className="container">
        <div id="video-container">
            <video id="video" loop="loop" muted autoPlay="autoplay">
              <source
                src="https://dtoz3qm0nr91u.cloudfront.net/dlg-snipper-horizontal.mp4"
                type="video/mp4"
              />
            </video>
            <div className="hero-section-mobile">
          <video id="video2" loop="loop" muted autoPlay="autoplay">
              <source
                src="https://dtoz3qm0nr91u.cloudfront.net/dlg-snippet-vertical.mp4"
                type="video/mp4"
              />
            </video>
            </div>
          </div>
          <div className="video-text">
            <div className="video-heading-img">
            <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65ec130da8f7dd4e6f00edb6_DLG-Header-Name.svg" alt="" />
            </div>
            <button> Watch Trailer </button>
             </div>
        </div>
         

    </>
  );
}

export default Video;
