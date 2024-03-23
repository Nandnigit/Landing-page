import React from "react";
import './Card.css'

function Card() {
  return (
    <>
    <div className="event-card-section">
         <h1 className="event-card-section-headline"> Crafts You Will Build </h1>
        <div className="event-card"> 
            <div className="card">
            <img
                src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530abbe19fe0366b394d60d_icon-3.svg"
                alt=""
                id="card-img"
            />
            <h2 id="card-title">Absorb the framework</h2>
            <p id="card-text">
            Learn the framework behind the structure that make Marvel movies great & implement it for your events.
            </p>
            </div>
            <div className="card">
            <img
                src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530abbe19fe0366b394d60d_icon-3.svg"
                alt=""
                id="card-img"
            />
            <h2 id="card-title">Design a single event</h2>
            <p id="card-text">
            Create your event structure, topic selection, audience & speaker selection, social distribution & more.
            </p>
            </div>
            <div className="card">
            <img
                src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530abbe19fe0366b394d60d_icon-3.svg"
                alt=""
                id="card-img"
            />
            <h2 id="card-title">Establish events as a channel</h2>
            <p id="card-text">
            Create an annual event calendar to solve funnels across sales, account expansion & brand compounding.
            </p>
            </div>
        </div>
        <button className="registerBtn">
            Register Now
        </button>
    </div>
      
    </>
  );
}

export default Card;