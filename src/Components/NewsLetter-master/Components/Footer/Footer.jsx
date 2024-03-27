import './Footer.css'
function Footer(){
    return(
        <>
        
        <div className="footer_news-newsletter">
         <div className="footer-menus-newsletter">
            <spam className="first_line-newsletter">© 2024 GrowthX</spam>
        <a href="/">Privacy</a>
        <a href="/">Terms</a>
        <a href="/">Collection</a>
         </div>
        <br></br>
        <div className="newsletter-btns">
        <button className="newsletter_btn1">Start Writing</button>
        <button className="newsletter_btn1">Get the App</button>
        </div>
        <p className="newsletter-last_line"> Substack is the home for great writing</p>
        </div>
        </>
    )
}
export default Footer