import React from 'react';
import './Threepillors.css';
import Threepillorsimage from './Threepillorsimage';
import Datavideopart from '../DataLedGrowth/Components/Datavideopart';

function Threepillors() {
  return (
  <>
  <Threepillorsimage/>
    <div>
      <div className="second">
        <div className="heading">1</div>
        <div className="heading">Learning</div>
      </div>
      <div id="second-first">
        A → Z of revenue growth.
        <br />
        Get access to learning programs across product building, distribution, strategy & leadership.
      </div>
      <div className="boxes">
        <div className="item item1" id="firstrow">
          <div className="btn-threepillor">Live Experience</div>
          <br />
          <b>Obtaining Clients</b>
          <br />
          Find out how leading online businesses get their first 100 → 1M → 10M users.
          <br />
          <br />
          <div>Case Studies Included
        </div>
        <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65f2c25f1510d6f571710eab_Ca-p-500.png" className="itemimg"/>
        <br />
        </div>
        <div class="item item1" id="firstrow2"><div class="btn-threepillor">Live Experience</div><br/><b>User Onboarding:</b><br/>Create a plan for guiding new users through your product's initial action.
        <br/>
            <br/>
            <div>Case Studies Included</div>
            <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65f2c25f1510d6f571710eab_Ca-p-500.png" className="itemimg"/>
            <br/>
        </div>
        <div class="item item2" id="secondrow"><div class="btn-threepillor">Live Experience</div><br/><b>Retention Design:</b><br/> How to entice new users to stay engaged with the product.
        <br/>
            <br/>
            <div>Case Studies Included</div>
            <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65f2c25f1510d6f571710eab_Ca-p-500.png" className="itemimg"/>
            <br/>
        </div>
        <div class="item item 2" id="secondrow2"><div class="btn-threepillor">Live Experience</div><br/><b>Revenue Generation</b><br/>
            Discover how you adopt a product-first strategy to convert free users to paying customers.
            <br/>
            <br/>
            <div>Case Studies Included</div>
            <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65f2c25f1510d6f571710eab_Ca-p-500.png" className="itemimg"/>
            <br/>
            
        </div>
      </div>
      <div className="next">
        <div className="item" id="next1">
          <div className="btn-threepillor">Live Experience</div>
          <br />
          Growth Engine Design Set up your experimentation engine, design your growth organization to solve the correct input levers, and learn how to construct and modify your growth model at every stage of the product lifecycle.
          <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65f310f199de588be3bf89f9_capstone.png" className="itemimg"/>
        </div>
        <div class="item " id="next2"><div class="btn-threepillor">Proof of work</div><br/><b>Utilize the knowledge you have gained.</b><br/>
           <div class="video11"> Address practical issues in internet-first companies by using a capstone project and several smaller projects.</div>
           <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65f310f199de588be3bf89f9_capstone.png" className="itemimg"/>
        </div>
      </div>
      <Datavideopart/>
    </div>
    </>
  );
}
export default Threepillors;
