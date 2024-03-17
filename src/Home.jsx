import react from 'react'
import './Home.css'
import Threeoutcomes from './Components/ThreeOutcomes/Threeoutcomes'
import Threepillors from './Components/ThreePillors/Threepillors'
function Home(){
    return(
          <>
          <div className='home_body'>
          <h1>The Entrepreneurship Network</h1>
          <h1>Membership</h1>
          <p className="first_line">Structured learning, curated community & orbit<br/>
changing outcomes – in one membership.</p>
<div class="line"></div>
<button className='btn1'>Become a Member</button>
<h3>Join leaders at marquee internet companies
</h3>
<img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65842ad7fd3d64853ccdf1a7_homapge_logos%20(4)-p-1080.png" className="Homeimg"/>
  </div>        
          <Threeoutcomes/>
          <Threepillors/>
          </>
    )
}
export default Home