import React from "react";
import './DataLedpart3.css'

function DataLedpart3(){
    return(
        <>
        <div className="part3-container">
        <h1>Scheduled Dates</h1>
        <div className="thirdpart-DataLed">
            <div className="thirdpart1">Day 1: 23rd March, 11AM </div>
           <div className="icon"><i class="fa-solid fa-arrow-right"></i></div> 
            <div className="thirdpart1">Day 2: 24th March, 11AM </div>
            <div className="icon"><i class="fa-solid fa-arrow-right"></i></div>
            <div className="thirdpart1">Day 3:  31st March, 11AM</div>
        </div>
        <h1>Grab a free Resources</h1>
        <h3>Use this template to structure your growth experiments</h3>
        <div className='thirdpart2'>
            <div>
        <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65ee90eedbef6a26edda7c6b_Structured%20Req.svg" className="image2"/>
        </div>
        <div>
        <form>
            <input type="text" placeholder="Enter your Name"/>
            <br></br>
            <input type="email" placeholder="Enter your work email"/>
            <br></br>
            <button className="btn3">Get this template</button>
        </form>
        </div>
        </div>
        </div>
        </>
        
    )
}
export default DataLedpart3