import Footer from './Footer'
import './Footer_newsletter.css'
function Footer_newsletter() {
    return(
        <>
        <div className="newsletter-cont">
        <div className="newsletter">
        <h2>GrowthX's Newsletter</h2>
          <hr/>
          <div className="input-box">
          <input type="email"placeholder="Type your Email.."></input>
          <button className="newsletter_btn">Subscribe</button>
          </div>
          <ul className='newsletter-ul'>
            <li>About</li>
            <li>Archieve</li>
            <li>Recommendations</li>
            <li>Sitemap</li>
          </ul>
        </div>
        </div>
          <Footer/>
        </>
    )
}
export default Footer_newsletter