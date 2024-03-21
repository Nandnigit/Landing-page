import logo from '../assets/community2.svg'
import './Community2.css'

const PhotoSlider = () => {
  return (
    <div className='d-flex flex-column gap-5'>
      <div className='d-flex flex-column align-items-center mb-4'>
          <img src={logo} alt='community2' width={10} className=''/>
          <div className='d-flex flex-column align-items-center gap-4'>
            <h1 className='neuton-regular  '>Community</h1>
            <h4>Don’t network. Build an inner circle.</h4>
            <p>Over 1 million messages were exchanged in 2023 so far.</p>
          </div>
      </div>
      
      <div className='video-container'>
        <video autoPlay loop muted className="video-controller"  width="100%" height="100%">
          <source src="https://dtoz3qm0nr91u.cloudfront.net/community.mp4" type='video/mp4'/>
        </video>
        <div className='video-container-overlay'></div>
      </div>
    </div>
  )
}
export default PhotoSlider