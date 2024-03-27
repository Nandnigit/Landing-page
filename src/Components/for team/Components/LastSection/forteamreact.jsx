import React from 'react';
import './style.css'; 
import FAQ from './FAQ'

function PartnersPage() {
    return (
        <div className='teams-container'>
            <span className="teams-heading">TALENT ACQUISITION MADE EASY</span>
            <p className="p">Partners</p>
            <div>Top companies and startups have accelerated their revenue growth with the talent from GrowthX community.</div>
            <div className="teams-secondpart">
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src='https://assets-global.website-files.com/63a49822ee2304acc9455a42/644be2d11fc135bc4d0f1e2f_Shiffana%20Mk.png' alt="image" style={{width: '300px', height: '200px'}} />
                            <p>Shreyas Achar<br />Head of Marketing</p>
                            <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/644ab7bac2a31d39eb743bc6_plum.webp" style={{width: '150px', height: '60px'}} />
                        </div>
                        <div className="flip-box-back">
                            <h2><b>Why Directors Love us</b></h2>
                            <p> "They’ve raised the bar for growth talent in the Indian tech startup ecosystem!"<br /><p>Whether it's hiring/building Plum with GrowthX members or evaluating their growth strategy during one of the Demo Days, working with them has always been a delight. Within the Indian digital startup ecosystem, they have set a higher standard for growth talent!</p><br /></p>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src='https://assets-global.website-files.com/63a49822ee2304acc9455a42/644be2d19c193b356dea1de1_Vikram%20S.png' alt="image" style={{width: '300px', height: '200px'}} />
                            <p>Shiffana M K<br />Senior manager-M Capital</p>
                            <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/644c37ced06aa4eeade5f4a1_nova-benefits.png" style={{width: '150px', height: '60px'}} />
                        </div>
                        <div className="flip-box-back">
                            <h2><b>WHY HR MANAGERS LOVE US</b></h2>
                            <p> "Building problem solvers is a challenging problem. GrowthX does it with ease"<br /><p>GrowthX has helped us find some of the finest problem solvers. Their passion to balance the big picture of world reality with business outcomes is inspiring.</p><br /></p>
                        </div>
                    </div>
                </div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src='https://assets-global.website-files.com/63a49822ee2304acc9455a42/644be2d036edb31c472a1215_Shreyas%20A.png' alt="image" style={{width: '300px', height: '200px'}} />
                            <p>Vikram Aditya<br />Founder</p>
                            <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/644c37763de83b4530c35924_daolens%20(1).png" style={{width: '150px', height: '60px'}} />
                        </div>
                        <div className="flip-box-back">
                            <h2><b>WHY FOUNDERS LOVE US</b></h2>
                            <p> "Hiring the right talent is hard, GrowthX community is the solution,"<br /><p>Getting the right talent specifically around marketing and growth for the founding team is both essential and difficult specially with a time constraint. Being part of the GrowthX learning experience and community, I was reassured and didn’t have to look outside for it.</p><br /></p>
                        </div>
                    </div>
                </div>
                

            </div>
            <section>
                <div className="teams-thirdpart">
                    <br /><br /><br />
                    <p className="p1">Let's Build Your Dream Team</p>
                    <br />
                    <p className="p2">Top talent for your business, product, and marketing teams is available at GrowthX. Our members have developed pertinent, in-depth proof of work while studying the principles of revenue growth, and they have at least two craft experiences.</p>
                    <br />
                    <button className="teams-button">Get Started</button>
                    <br /><br /><br /><br /><br />
                </div>
            </section>
            <FAQ/>
        </div>
    );
}

export default PartnersPage;
