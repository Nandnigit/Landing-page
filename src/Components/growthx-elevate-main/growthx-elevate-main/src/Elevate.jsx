import "./App.css";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <section id="hero-section">
        <div className="hero-section-desktop">
          <div id="video-container">
            <video id="video" loop="loop" muted autoPlay="autoplay">
              <source
                src="https://dtoz3qm0nr91u.cloudfront.net/Gif Mp4compressed.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="hero-section-mobile">
          <img
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530ef8e85f8f6ee804ed015_mobile-hero-elevate%20(1).png"
            alt="elevate-banner"
          />
        </div>
        <div className="hero-controls">
          <img
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/652b167e7568770d040ab2c1_Flat%20Side-to-Side%20(1).svg"
            alt="elevate-logo"
          />
          <a href="/" className="glowing-action-button">
            Watch Trailer
          </a>
        </div>
        <div className="inner-shadow"></div>
      </section>
      <div className="elevate-text-section">
        <h2 id="elevate-text-content">
          The path to leadership is <span> lonely </span> . For the longest
          time, professionals have{" "}
          <span> lacked the structure + safe space </span> to{" "}
          <span> crack & thrive </span> in breakout growth roles.
        </h2>
        <h2 id="elevete-blue-heading">That changes today.</h2>
      </div>
      <div className="elevete-card-section">
        <div id="card">
          <img
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530abbe19fe0366b394d60d_icon-3.svg"
            alt=""
            id="card-img"
          />
          <h2 id="card-title">Crack a new role</h2>
          <p id="card-text">
            Structure to crack technical interviews across mid-senior →
            leadership roles across product building, distribution, growth &
            strategy.
          </p>
        </div>
        <div id="card">
          <img
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530abbe19fe0366b394d60d_icon-3.svg"
            alt=""
            id="card-img"
          />
          <h2 id="card-title">Get promoted</h2>
          <p id="card-text">
            Learn how to build relevant proof of work and drive impact to grow
            into a leadership role in your org.
          </p>
        </div>
        <div id="card">
          <img
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530abbe19fe0366b394d60d_icon-3.svg"
            alt=""
            id="card-img"
          />
          <h2 id="card-title">Thrive in new role</h2>
          <p id="card-text">
            Design 30-60-90 roadmap to set yourself up for success in the new
            role, and build equity with your team.
          </p>
        </div>
      </div>
      <div className="blue-text">
        <h2 id="blue-headline">Your GrowthX membership just got an upgrade.</h2>
      </div>
      <div className="pitch-video-section">
        <div id="video-container">
          <video id="video" loop="loop" muted autoPlay="autoplay">
            <source
              src="https://dtoz3qm0nr91u.cloudfront.net/metallic waves compressed2_1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <picture className="pitch-images-container">
          <img
            id="desktop-image"
            media="(min-width: auto)"
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530ffcfea1efcd842e2f561_platform-desktop-final.png"
          />
          <img
            id="mobile-image"
            media="(min-width: 480px)"
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530e6340bb49d25a58eb209_platform-p-500.png"
          />
        </picture>
      </div>
      <div className="elevate-role-section"></div>
      <div className="testimonial-section">
        <div id="testimonial-text-box">
          <h4 id="testimonial-subheading">━ GROWTHX MEMBER SINCE 2021</h4>
          <p className="quote">
            "Starting my career as associate marketing manager to joining
            GrowthX fam & now leading retention charter for CRED is an
            exponential career journey for me."
          </p>
          <div className="decorative-line"></div>
          <div className="testimonial-contact">
            <h3 className="name">Archita Khare</h3>
            <div className="profile">Leading Retention Charter</div>
          </div>
          <img
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6516214a21aee1475872bc42_Cred.webp"
            alt="cred-logo"
            id="company-logo"
          />
          <a href="/" className="glowing-action-button">
            Become a Member
          </a>
        </div>
        <div id="testimonial-image-box">
          <img
            src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530bbe5295eb56d6d223b37_Achita_s_LinkedIn_DP-removebg%202-p-500.png"
            alt="profile-image"
          />
        </div>
      </div>

      {/* progress-bar */}
      <div className="elevate-bar-section">
        <div className="elevate-bar">
          <div className="progress-container">
            <div className="progress-bar"></div>
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530c1bc472672042ffc306b_structure.png"
              alt="structure indicator image"
              id="structure-image"
            />
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530c2568fb38929ccd0ec97_practise.png"
              alt="practice indicator"
              id="practice-image"
            />
          </div>
        </div>
        <h2 id="bar-section-headline">It doesn't work unless you do</h2>
        <p id="bar-section-text">
          Only 30% of your interview prep is structure, the rest 70% is
          practice. ELEVATE® gives you right structure and the safe space to
          practice simulated interview experiences.
        </p>
      </div>
      <div className="crack-section">
        <h2 className="crack-section-headline">
          Learn to crack <span>technical</span> interviews
        </h2>
        <p className="crack-section-text">
          Plus get access to safe space to practice with GrowthX members.
        </p>
        <div className="crack-section-img-grid">
          <div className="crack-image-section">
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530e9b7472672042f2e140a_V3%20With%20Music.00_00_09_06%201.png"
              alt=""
              id="crack-image"
            />
          </div>
          <div className="div-container">
            <div className="inner-div">
              <span className="material-symbols-outlined" id="unlock">
                lock_open
              </span>
              <span className="material-symbols-outlined" id="qusestion">
                question_mark
              </span>
              <p className="id-text1"> Extimation </p>
            </div>
            <div className="inner-div">
              <span className="material-symbols-outlined">lock</span>
              <span className="material-symbols-outlined">question_mark</span>
              <p className="id-text"> GTM Strategy </p>
            </div>
            <div className="inner-div">
              <span className="material-symbols-outlined">lock</span>
              <span className="material-symbols-outlined">question_mark</span>
              <p className="id-text"> Product Sense </p>
            </div>
            <div className="inner-div">
              <span className="material-symbols-outlined">lock</span>
              <span className="material-symbols-outlined">question_mark</span>
              <p className="id-text"> Product Metrics </p>
            </div>
            <div className="inner-div">
              <span className="material-symbols-outlined">lock</span>
              <span className="material-symbols-outlined">question_mark</span>
              <p className="id-text"> Product Improvement </p>
            </div>
            <div className="inner-div">
              <span className="material-symbols-outlined">lock</span>
              <span className="material-symbols-outlined">question_mark</span>
              <p className="id-text"> Root Cause Analysis </p>
            </div>
            <div className="inner-div">
              <span className="material-symbols-outlined">lock</span>
              <span className="material-symbols-outlined">question_mark</span>
              <p className="id-text"> Assignment Deep Dive </p>
            </div>
          </div>
        </div>
      </div>
      {/* progress-bar */}
      <div className="mental-model-card-container">
        <div className="mental-model-card-section">
          <div className="text-box">
            <h3>160+ ental models</h3>
            <p className="mental-model-para">
              A curated collection of actionable video lessons to crack roles
              across product, marketing, strategy at top product based
              companies. Built exclusively for the India tech ecosystem.
            </p>
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530ce53b635b01d68844921_comming%20soon%20(1)-p-500.png"
              alt="total-models"
              className="card-image"
            />
            <a href="/" className="glowing-action-button">
              Get access
            </a>
          </div>
          <div className="model-image-box">
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530d04e4b79e8487a51d5af_crack-image-p-500.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Second last section */}
      <div className="exclusive-content-container">
        <div className="exclusive-content-section">
          <div className="exclusive-content-text-container">
            <h2 className="exclusive-content-heading">
              Access 300+ <span>breakout</span> product orgs
            </h2>
            <p className="content-para">Mid senior → leadership growth roles</p>
          </div>
          <div className="exclusive-image-container">
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530995d295eb56d6df5922f_elevate-logos-p-1080.png"
              alt="exclusive companies"
              className="exclusive-image"
            />
          </div>
        </div>
      </div>
      {/* Second last section */}
    </>
  );
}

export default App;
