import { useEffect, useState } from 'react';
import "./Cred.css";

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
                    “Starting my career as associate marketing manager to joining GrowthX & landing up a big role at CRED, truly exponential.”
                    </h3>
                    

                    <div className="testimonial-client">
                        <div className="testimonial-name">
                            <div className="testimonial-name-headline">Achita Khare</div>
                            <div className="testimonial-name-subtext">
                            Growth & Retention
                            </div>
                        </div>
                        <div className="testimonial-divider"></div>
                        <div className="testimonial-card-image">
                            <img
                            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64a3c8d38529a87c8ce91dca_CRED-p-500.png"
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

                <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6578016f104d506b0a1a4489_Ayushi%201.png" alt="CMO_image" className="testimonial-image" style={{justifySelf: 'center', width:'35vw'}} loading="lazy" />
                
            </div>

        </div>
      </div>
    </section>
  );
};
export default Member;
