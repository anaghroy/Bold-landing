import React from "react";
import "../styles/layout/_topsection.scss";
import profile1 from "../assets/Images/Users/profile1.jpg";
import profile5 from "../assets/Images/Users/profile5.jpg";
import profile2 from "../assets/Images/Users/profile2.jpg";
import Stylized from "../assets/Images/Stylized1.png";
const TopSection = () => {
  return (
    <section className="main-topsection">
      <div className="hero-card">
        {/* clip-path svg */}
        <svg width="0" height="0">
          <defs>
            <clipPath id="custom-clip" clipPathUnits="objectBoundingBox">
              <path d="M-0.1538 0 1 0 1 0.8462 0.5 0.8462C0.46 0.8462 0.42 0.77 0.46 0.69H-0.1538Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left">
            <h1>
              Where we empower you to embrace your unique
              <span className="inline-images">
                <img src={profile1} alt="profile1" />
                <img src={profile5} alt="profile5" />
                <img src={profile2} alt="profile2" />
              </span>
              personality and unleash your full potential
            </h1>

            <div className="hero-actions">
              <button className="primary-btn">Start Test</button>

              <div className="stats">
                <div>
                  <h3>236+</h3>
                  <span>Tests taken today</span>
                </div>
                <div>
                  <h3>95%</h3>
                  <span>Results rated</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <img src={Stylized} alt="illustration" />
          </div>
        </div>
      </div>

      {/* BOTTOM TAGS */}
      <div className="hero-tags">
        <button>Bold personality</button>
        <button>Self-discovery</button>
        <button>Personal growth</button>
      </div>
    </section>
  );
};

export default TopSection;

