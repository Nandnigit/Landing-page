import './AnnualRetreat.css'
import chat_2 from '../assets/chat_2.png'
import chat_1 from '../assets/chat_1.png'
import chat_3 from '../assets/chat_3.png'
import annual_retreat_img from '../assets/annual-retreat-photo.png'
import { useEffect, useState } from 'react'

const AnnualRetreatSection = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      
      return () => clearTimeout(timer); 
    }, []);

  return (
    <section className="annual-retreat-section">
        <div className='u-padding'>
            <div className='image-content-section'>
                <div className='annual-retreat-title'>
                    <span>Annual retreat</span>
                </div>

                <div className='annual-retreat-body'>
                    <span>The most coveted flagship event for founder & growth leaders in the country designed <br />to create unique, memorable & bonding in-real-life experiences.</span>
                </div>

                <div className={`image-msg-holder ${isVisible ? 'appear' : ''}`}>
                    <img src={chat_2} alt='img-msg-2'  className='img-msg-2'/>

                    <img src={chat_1} alt='img-msg-1'  className='img-msg-1'/>

                    <img src={chat_3} alt='img-msg-3'  className='img-msg-3'/>
                </div>

            </div>
        </div>

        <img src={annual_retreat_img} className='annual-retreat-img' alt='annual-retreat-image'/>
    </section>
  )
}
export default AnnualRetreatSection