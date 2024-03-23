import React from 'react';
import './Eventledpart1.css';
import Videopart from './Videopart'

function FirstPart() {
  return (
    <div className="firstpart">
      <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64dcfe88badaf24e950f4ca2_ELG_Web%20(1).jpg" className="img" alt="image1" />
     <div className="firstpart-text">
      <h1 className="img1">Event LED Growth</h1>
     <p>BUILT ON THE MARVEL MOVIE FRAMEWORK</p>
      <button>Become Member</button>
     </div>
    </div>
  );
}

function SecondPart() {
  return (
    <div className="secondpart">
          <h1>Framework to solve event led growth at every product stage</h1>
     <div className="secondpart-boxes">
     <div className="secondpart1">
        <h3>EARLY</h3>
        <p>$10M "ARR"</p>
        <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64cc6fbf9063e7b30d18de9b_infeedo.webp" className="secondimage"/>
      </div>
      <div className="secondpart1">
        <h3>MID-MARKET</h3>
        <p>$10-$50M ARR</p>
        <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64cc6fbed4d4629cd9c152ce_deel.webp" className="secondimage"/>
      </div>
      <div className="secondpart1">
        <h3>MATURE-SCALING</h3>
        <p>$50M ARR</p>
        <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64cc6fbeef8396b7979548b9_miro.webp" className="secondimage"/>
      </div>
     </div>
    </div>
  );
}

function ThirdPart() {
  return (
    <div className="thirdpart-section">
         <div className="thirdpart">
      <div className="thirdpart1">
        <h2>Nishchal Dua</h2>
        <h3>PROGRAM DIRECTOR AT GROWTHX</h3>
        <p>Designed & executed 100+ global events at Airmeet as Director of Marketing. Built a revenue pipeline of $2.5 million using just events as a core lever.</p>
        <p>VP Marketing | infeedo </p>
      </div>
      <div className="thirdpart2">
        <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64ccd6041f58b6b040e02892_nischal-p-500.png" width="250px" height="250px" className='thirdpart-img' alt="image3" />
      </div>
    </div>
    </div>
  );
}
function Eventpart1() {
  return (
    <>
      <FirstPart />
      <Videopart/>
      <SecondPart />
      <ThirdPart />
    </>
  );
}

export default Eventpart1;