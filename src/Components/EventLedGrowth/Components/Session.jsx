import React from "react";
import './Session.css'

function Session() {
  return (
    <>
    <div className="event-card-section">
         <h1 className="event-card-section-headline"> Curriculum </h1>
        <div className="event-card"> 
            <div className="card">
             <h2 id="Session-headline">SESSION 1 | AUG 12TH</h2>
            <h2 id="card-title">Framework Deep Dive</h2>
            <p id="card-text">
            Understand if your product is ready for ELG. Apply original mental models built exclusively for events.
            </p>
            </div>
            <div className="card">
            <h2 id="Session-headline">SESSION 2 | AUG 13TH</h2>
            <h2 id="card-title">Case Study Deep Dive</h2>
            <p id="card-text">
            Learn nuances of tweaking the framework across early, mid-market & mature stage products.
            </p>
            </div>
            <div className="card">
            <h2 id="Session-headline">SESSION 3 | AUGUST 20TH</h2>
            <h2 id="card-title">Program Director's Circle</h2>
            <p id="card-text">
            Speak to your Program Director, brainstorm your problems & get feedback on your submission.
            </p>
            </div>
        </div>
        <div className="event-card2">
            <h2 id="card-title">
            What will you build?
            </h2>
            <p id="card-text">
            Understand if your product is ready for ELG. Apply original mental models built exclusively for events.
            </p>

        </div>
       
    </div>
      
    </>
  );
}

export default Session;