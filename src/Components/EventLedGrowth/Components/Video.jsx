import React from 'react';
import './Video.css';

function Video(){
  return(
    <div className="video-player">
        <div className="video-text-event">
          <h1>
            THIS CRAFT is a Part of the GROWTH<span>X</span> Experience
          </h1>
          <p>
            Access to this craft & much more comes as a part of Growthx
            Membership
          </p>
        </div>
        <iframe
          src="https://player.vimeo.com/video/861896581?autoplay=1&muted=1&quality=720p&badge=0&autopause=0&player_id=0&app_id=58479 "
          title="video player"
          fameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
  )

}
export default Video