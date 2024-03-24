import "./HireTheBest.css";
import Holder_2 from "../../assets/holder_2.svg";
import HLine from "../../assets/hLine.svg";
import Product_pie from "../../assets/product-pie.png";
import Growth_pie from "../../assets/growth-pie.png";
import Marketing_pie from "../../assets/marketing-pie.png";
import { useEffect, useRef, useState } from "react";

const HireTheBest = () => {
  const [current, setCurrent] = useState("product");
  const [isVisible, setIsVisible] = useState(false);
  const Ref = useRef(null);

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

  return (
    <section className="pie-chart-section">
      <div className="u-padding">
        <div className="pie-chart-content">
          <img
            src={Holder_2}
            alt="timeline-2-image"
            ref={Ref}
            className={`timeline-2-image ${isVisible ? "appear" : ""}`}
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

          <h2 className="outline-headline">Hire The Best</h2>

          <p className="general-subtext">
            Our members undergo an immersive learning experience that equips
            them with the <br /> necessary skills and concepts that sets them
            apart.
          </p>

          <section style={{ marginTop: "96px", marginBottom: "96px" }}>
            <div className="pie-chart-container">
              <div className="pie-chart-grid">
                <div className="pie-chart-tabs">
                  <span
                    className={`tab-data ${current === "product" && "current"}`}
                    onClick={() => setCurrent("product")}
                  >
                    <h3 className="tab-headline">Product</h3>

                    <div className="tab-subtext">
                      Our members have a{" "}
                      <span className="white-font">
                        median work experience of 6 years
                      </span>{" "}
                      that covers a diverse range of industries <br />
                      including Fintech, Saas, Ecommerce, Healthtech, Media &
                      Entertainment.
                    </div>
                  </span>

                  <span
                    className={`tab-data ${current === "growth" && "current"}`}
                    onClick={() => setCurrent("growth")}
                  >
                    <h3 className="tab-headline">Growth</h3>

                    <div className="tab-subtext">
                      Our members have a{" "}
                      <span className="white-font">
                        median work experience of 5 years
                      </span>{" "}
                      that covers a diverse range of industries <br />
                      including Fintech, Saas, Ecommerce, Healthtech, Media &
                      Entertainment.
                    </div>
                  </span>

                  <span
                    className={`tab-data ${
                      current === "marketing" && "current"
                    }`}
                    onClick={() => setCurrent("marketing")}
                  >
                    <h3 className="tab-headline">Marketing</h3>

                    <div className="tab-subtext">
                      Our members have a{" "}
                      <span className="white-font">
                        median work experience of 6 years
                      </span>{" "}
                      that covers a diverse range of industries <br />
                      including Fintech, Saas, Ecommerce, Healthtech, Media &
                      Entertainment.
                    </div>
                  </span>
                </div>

                <div className="pie-charts">
                  <div
                    className={`pie-chart ${
                      current === "product" && "current"
                    }`}
                  >
                    <img src={Product_pie} alt="product-pie-chart" />
                  </div>

                  <div
                    className={`pie-chart ${current === "growth" && "current"}`}
                  >
                    <img src={Growth_pie} alt="growth-pie-chart" />
                  </div>

                  <div
                    className={`pie-chart ${
                      current === "marketing" && "current"
                    }`}
                  >
                    <img src={Marketing_pie} alt="marketing-pie-chart" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
export default HireTheBest;
