import React from 'react';
import './Videopart.css';

function VideoPlayer(){
  return(
    <div className="video-player">
        <iframe
          src={
            "https://dtoz3qm0nr91u.cloudfront.net/Reduced.mp4 "
          }
          title="video player"
          fameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
  )

}
export default VideoPlayer