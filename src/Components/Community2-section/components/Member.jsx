import { useEffect, useState } from 'react';
import ablogo from "../assets/aditya-birla-logo.png";
import jaimit from "../assets/jaimit-doshi.png";
import "./Member.css";

const Member = () => {

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer); 
  }, []);

  return (
    <section className="testimonial-section">
      <div className="u-padding" >
        <div className="leaders-content" >
            <div className="testimonial-grid">
                <div className={`testimonial-content ${isVisible ? 'appear' : ''}`} >
                    <p className="member-since">MEMBER SINCE 2021</p>
                    <h3 className="you-cannot" >
                        "You cannot explain what GrowthX is, you have to experience it first
                        hand."
                    </h3>
                    <div className=" member-subtext" >
                        After leading marketing at Kotak Securities, Citrus, Coverfox,{" "}
                        <span className="is-white">
                        the learning experience allowed me to unlearn & relearn{" "}
                        </span>
                        some of the key levers to growth, with the community we call home.
                    </div>

                    <div className="testimonial-client">
                        <div className="testimonial-name">
                            <div className="testimonial-name-headline">Jaimit Doshi</div>
                            <div className="testimonial-name-subtext">
                                Chief Marketing Officer
                            </div>
                        </div>
                        <div className="testimonial-divider"></div>
                        <div className="testimonial-card-image">
                            <img
                            src={ablogo}
                            alt="testimonial-brand-image"
                            className="testimonial-brand-image"
                            width={128}
                            height={128}
                            />
                        </div>
                    </div>

                    <a
                        href="https://growthx.cc/apply"
                        target="_blank"
                        className="member-button align-self-start "
                    >
                        Become a Member
                    </a>
                </div>

                <img src={jaimit} alt="CMO_image" className="testimonial-image" style={{justifySelf: 'center', width:'35vw'}} loading="lazy" />
                
            </div>

        </div>
      </div>
    </section>
  );
};
export default Member;
