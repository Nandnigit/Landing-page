import "./Navbar.css"

function Navbar(){
    return(
        <>
        <div className="navbarclass-newsletter">

            <div className="navbar-img1-newsletter" >
            <img src="https://substackcdn.com/image/fetch/w_88,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F048641cb-ee19-431b-80cc-e15ed631dd2f_256x256.png" />

            </div >
   
            <div className="navbar-img2-newsletter">
            <img src="https://substackcdn.com/image/fetch/e_trim:10:white/e_trim:10:transparent/h_72,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2adee35b-fe7c-4baf-8d41-62ce8b964572_1344x256.png" className="navbar-img2-newsletter"/>

            </div>
            <div className="navbar-btnclass-newsletter">
                <button className=" btn1-newsletter"><i class="fa-solid fa-magnifying-glass"></i></button>
                <button className=" btn1-newsletter"><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
                <button className="navbarbtn-newsletter">+ subscribe</button>
                <button className="navbarbtn-newsletter">Sign in</button>
            </div>
        </div>
        <hr/>
        <div className="links-newsletter">
        <div  className="navbar_link-newsletter">Home</div>
        <div  className="navbar_link-newsletter">Register for DD18</div>
        <div  className="navbar_link-newsletter">Become a member</div>
        <div  className="navbar_link-newsletter">Past articles</div>
        <div  className="navbar_link-newsletter">GrowthX Infographics</div>
        <div  className="navbar_link-newsletter">About</div>
        </div>
        <hr/>
         <div className="navbar_secondpart-newsletter">
             <div className="second-part-container-newsletter">
             <div className="navbar_image-newsletter" >
              <img src="https://substackcdn.com/image/fetch/w_848,h_477,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F897f83a1-fe39-4ff1-9266-286c6d6b7386_1989x1421.png" ></img>
             </div> 
            <div className="navbar_para-newsletter">
                <h1>How to really build a compounding career?</h1>
                <p>An article you will bookmark</p>
                <p className="navbar_para_lastline-newsletter">Nov 28, 2023 . ABHISHEK FROM GROWTHX</p>
            </div>

             </div>
            </div>       
         
        </>
    )
}
export default Navbar