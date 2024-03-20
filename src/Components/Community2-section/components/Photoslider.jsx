import { useEffect, useState } from "react";
import img1 from "../assets/community2-image1.png";
import img2 from "../assets/community2-image2.png";
import img3 from "../assets/community2-image3.png";
import svg from "../assets/make-serendipity.svg";
import "./Photoslider.css";

const PhotoSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = document
        .getElementById("content")
        .getBoundingClientRect().top;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateBackgroundColor = () => {
    const containerHeight = document.getElementById("content")?.offsetHeight;
    const scrollStart = containerHeight * 0.2;
    const scrollEnd = window.innerHeight * 0.27;
    const progress = Math.min(
      Math.max((scrollPosition - scrollEnd) / (scrollStart - scrollEnd), 0),
      1
    );
    const colorValue = Math.round(255 * progress);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  };

  return (
    <section
      id="container"
      className="photos-section"
      style={{ backgroundColor: calculateBackgroundColor() }}
    >
      <div id="content" className="content ">
        <div className="photo-content bg-transparent">
          <div className="curated-div bg-transparent ">
            <div className="curated">Curated to</div>
            <div className="line"></div>
          </div>
          <div className="w-embed"></div>
          <img
            src={svg}
            alt="make-serendipity-happen"
            width={500}
            className="msh-img bg-transparent "
          />
        </div>
      </div>

      <div className="community2-image">
        <img src={img1} alt="community2-image1" className="comm-image" />
        <div className="community-content">
          <div className="learning-cards-title">build your inner circle</div>
          <div className="learning-body-text">
            70% of our 2,500+ members are active monthly
          </div>
        </div>
        <div className="comm-ovrelay"></div>
      </div>

      <div className="community2-image">
        <img src={img2} alt="community2-image2" className="comm-image" />
        <div className="community-content">
          <div className="learning-cards-title">get questions answered</div>
          <div className="learning-body-text">
            that even GPT can’t find solutions to.
          </div>
        </div>
        <div className="comm-ovrelay"></div>
      </div>

      <div className="community2-image">
        <img src={img3} alt="community2-image3" className="comm-image" />
        <div className="community-content">
          <div className="learning-cards-title">soundboard with peers</div>
          <div className="learning-body-text">
            jam with people who’ve been there, done that.
          </div>
        </div>
        <div className="comm-ovrelay"></div>
      </div>
    </section>
  );
};
export default PhotoSlider;
