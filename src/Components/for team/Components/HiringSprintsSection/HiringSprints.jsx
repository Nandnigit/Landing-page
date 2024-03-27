import "./HiringSprints.css";
import Holder_3 from "../../assets/holder_3.svg";
import HLine from "../../assets/hLine.svg";
import Magnify from "../../assets/magnify-svg.svg";
import Edit from "../../assets/edit-svg.svg";
import Fourdots from "../../assets/fourdots-svg.svg";
import Verified from "../../assets/verified-svg.svg";
import Insta from "../../assets/insta.svg";
import Ball from "../../assets/ball.svg";
import Close from "../../assets/close.svg";
import Lock from "../../assets/lock.png";
import { useEffect, useState, useRef } from "react";

const HiringSprints = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(0.8);
  const [toggleModal, setToggleModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const ButtonRef = useRef(null);
  const Ref = useRef(null);

  const data = [
    {
      heading: "Aanya Desai",
      subHeading: "Head of Growth",
      subText:
        "Drove sustainable organic growth through SEO optimization & content marketing.",
    },
    {
      heading: "Advait Sharma",
      subHeading: "Growth Manager",
      subText: "Drove successful user acquisition and retention campaigns.",
    },
    {
      heading: "Sia Choudhary",
      subHeading: "Product Manager",
      subText:
        "Oversaw development of multiple successful products from ideation.",
    },
    {
      heading: "Kavya Gupta",
      subHeading: "Product Design",
      subText: "Designed award-winning interfaces for mobile and web.",
    },
    {
      heading: "Pranav Joshi",
      subHeading: "Growth & Retention",
      subText:
        "Increased customer retention by 20% through targeted strategies.",
    },
    {
      heading: "Dhruv Singh",
      subHeading: "Brand Strategist",
      subText:
        "Developed brand identity for top-tier clients across industries.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setButtonVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ButtonRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const position = document
        .getElementById("opacity")
        .getBoundingClientRect().top;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const containerHeight = document.getElementById("opacity")?.offsetHeight;
    const scrollStart = containerHeight * 0.5;
    const scrollEnd = window.innerHeight * 0.27;
    const progress = Math.min(
      Math.max((scrollPosition - scrollEnd) / (scrollStart - scrollEnd), 0),
      1
    );
    // Calculate opacity based on progress
    const opacityValue = 0.25 + (0.8 - 0.25) * progress;
    setOpacity(opacityValue);
  }, [scrollPosition]);

  return (
    <div className="hiring-sprints-section" style={{ marginBottom: "192px" }}>
      <div className="u-padding">
        <div className="hiringsprints-content">
          <img
            src={Holder_3}
            loading="lazy"
            alt="timeline-3-image"
            ref={Ref}
            className={`timeline-3-image ${isVisible ? "appear" : ""}`}
          />

          <div className="get-talent-grid">
            <img src={HLine} alt="hline-left" className="hline-left" />

            <h3 className="get-talent-headline">
              Get Talent that drives Growth
            </h3>

            <img
              src={HLine}
              alt="hline-right"
              className={`hline-right ${isVisible ? "appear" : ""}`}
            />
          </div>

          <h2 className="outline-headline">Hiring Sprints</h2>

          <p
            className="general-subtext"
            style={{ marginBottom: "96px", marginTop: "24px" }}
          >
            We aim to speed up the hiring process and streamline entire
            operations by hosting exclusive hiring sprints with only a few
            selected partner companies.
          </p>

          <div className="hiring-sprints-grid">
            <div className="hiring-sprints-card">
              <div className="svg-icon">
                <img src={Magnify} alt="magnify-svg" />
              </div>

              <h3 className="hiringsprints-card-headline">
                Right target pool of candidates
              </h3>

              <div className="hiringsprints-card-subtext">
                Only 8% of those who apply get into GrowthX community. Our
                admissions process vets every member on their craft, experience,
                communication and culture match.
              </div>
            </div>

            <div className="hiring-sprints-card">
              <div className="svg-icon">
                <img src={Edit} alt="edit-svg" />
              </div>

              <h3 className="hiringsprints-card-headline">Proof of work</h3>

              <div className="hiringsprints-card-subtext">
                Our members go through an intense two months learning experience
                and build assignments on solving for growth and revenue for
                multiple companies.
              </div>
            </div>

            <div className="hiring-sprints-card">
              <div className="svg-icon">
                <img src={Fourdots} alt="fourdots-svg" />
              </div>

              <h3 className="hiringsprints-card-headline">Brand building</h3>

              <div className="hiringsprints-card-subtext">
                With GrowthX hiring sprint, you get to address the top 1% growth
                folks from the ecosystem and tell them the story of your
                organisation.
              </div>
            </div>

            <div className="hiring-sprints-card">
              <div className="svg-icon">
                <img src={Verified} alt="verified-svg" />
              </div>

              <h3 className="hiringsprints-card-headline">Talent Support</h3>

              <div className="hiringsprints-card-subtext">
                GrowthX Talent team co-ordinates everything with members related
                to forwarding assignments, interview rounds & lets you focus
                only on evaluating the pool of folks interested.
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px", marginBottom: "96px" }} className="get-started">
            <a
              href="https://talent.growthx.club/"
              target="_blank"
              className="getstarted-button"
            >
              Get Started
            </a>
          </div>

          <h2 className="get-access-directory">
            Get access to our member directory
          </h2>

          <div
            className="member-directory-grid"
            id="opacity"
            style={{ opacity: opacity }}
          >
            {data.map((card, i) => (
              <div className="member-directory-card" key={i}>
                <div className="mdc-content">
                  <div className="mdc-heading">{card.heading}</div>
                  <div className="mdc-subheading">{card.subHeading}</div>
                  <div className="mdc-subtext">{card.subText}</div>
                  <div className="socials">
                    <a href="#" className="social-link">
                      <div className="social-icon">
                        <img src={Insta} alt="insta-icon" />
                      </div>
                    </a>
                    <a href="#" className="social-link">
                      <div className="social-icon">
                        <img src={Ball} alt="ball-icon" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="modal-button-component">
        <div
          className={`modal-button  ${buttonVisible ? "appear" : ""}`} ref={ButtonRef}
          onClick={() => setToggleModal(!toggleModal)}
        >
          <div className="modal-button-text">Access to Talent Directory</div>
        </div>
        {/* --  */}
        <div
          className="modal"
          style={{
            display: toggleModal ? "flex" : "none",
            opacity: toggleModal ? "1" : "0",
          }}
        >
          <div className="modal-cover"></div>
          <div className="modal-container">
            <div className="modal-content">
              <img
                src={Lock}
                width={40}
                height={40}
                alt="lock-icon"
                loading="lazy"
              />
              <p className="modal-subtext">
                Sign the talent agreement, update all job details to get access
                to our member directory.
              </p>
              <a
                href="https://talent.growthx.club/"
                target="_blank"
                className="modal-submit"
              >
                Get Started
              </a>
            </div>

            <div className="modal-close" onClick={() => setToggleModal(false)}>
              <div className="close-icon">
                <img src={Close} alt="close-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HiringSprints;
