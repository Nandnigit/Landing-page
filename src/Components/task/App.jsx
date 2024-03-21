import React, { useEffect, useState } from 'react';
import './index.css'; 

const ScrollBoldWhiteText = () => {
  const [currentLine, setCurrentLine] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const lines = document.querySelectorAll('.homepage-headline span');

      lines.forEach((line, index) => {
        const rect = line.getBoundingClientRect();
        const isLineVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        const isNextLine = index + 1 === currentLine;

        if (isLineVisible) {
          line.style.color = isNextLine ? 'white' : 'rgb(87, 87, 87)';
        }
      });

      // Increment the current line for the next iteration
      setCurrentLine((prevLine) => (prevLine % lines.length) + 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentLine]);

  return (
    <section
      data-w-id="f4aa10ba-b0bf-37ce-1e2f-b4c46f05fdb0"
      className="text-animation-section"
    >
      <h1 className="homepage-headline">
        <span className={`b1`} >
          Membership built for
        </span>
        <br />
        <span className={`b2`} >
          ambitious founders,
        </span>
        <br />
        <span className={`b3`} >
          marketing, product<br />‍
        </span>
        <span className={`b5`} >
          &amp; &nbsp;business leaders
        </span>
      </h1>

      
      <div className="cards-container">
        {/* Card 1 */}
        <div className="c-card _1">
          <div className="_w-card">
            <div className="c-card-title">
              <h2 className="card-title-2">For founders</h2>
            </div>
            <div className="c-card-subtitle">
              <h3 className="card-subtitle">Scale your orgs & products.</h3>
              <div className="u-spacing-block is--small"></div>
            </div>
            <div className="c-card-details">
              <p className="card-details">
                <span className="is--white">Design your revenue roadmap</span>, go
                from Pre-PMF to Series A. <span className="is--white">Soundboard
                with founders</span> from Pre-PMF to Series B with ~$20M in
                revenue. <span className="is--white">Build your growth team </span>-
                get access to a pool 1,600+ top growth talent.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="c-card _2">
         
          <div className="_w-card">
            <div className="c-card-title">
              <h2 className="card-title-2">For leaders</h2>
            </div>
            <div className="c-card-subtitle">
              <h3 className="card-subtitle">Create revenue impact.</h3>
              <div className="u-spacing-block is--small"></div>
            </div>
            <div className="c-card-details">
              <p className="card-details">
                <span className="is--white">Build a revenue growth model</span>, & priorities based on business objective.
                 <span className="is--white">Soundboard
                with 500+ growth & Product leaders</span> in Similar journeys.
                <span className="is--white">Hire top talent  </span>-
                with in-depth proof of work
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="c-card _3">

          <div className="_w-card">
            <div className="c-card-title">
              <h2 className="card-title-2">For mid-managers</h2>
            </div>
            <div className="c-card-subtitle">
              <h3 className="card-subtitle">Pave your transition to leadership.</h3>
              <div className="u-spacing-block is--small"></div>
            </div>
            <div className="c-card-details">
              <p className="card-details">
                <span> Learn how to</span> <span className="is--white">Impact the business bottom line. Work with top founders</span>,
                typically in the 1→10 stage, 80% having raised money.<span className="is--white">Soundboard
                with top growth leaders</span> and founders from the ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="c-card _4">

          <div className="_w-card">
            <div className="c-card-title">
              <h2 className="card-title-2">For operators</h2>
            </div>
            <div className="c-card-subtitle">
              <h3 className="card-subtitle">Design your 5 year career roadmap.</h3>
              <div className="u-spacing-block is--small"></div>
            </div>
            <div className="c-card-details">
              <p className="card-details">
                <span className ="is--white">Learn the macro and micro nuances  </span> <span>of revenue growth</span>
                <span className="is--white">Apply frameworks on your product 
                </span> <span className="is--white"> Soundboard </span> <span>with marquee leaders & founders.Build the right surface area of luck to </span>
                 <span className="is--white"> land breakout roles.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};





export default ScrollBoldWhiteText;

