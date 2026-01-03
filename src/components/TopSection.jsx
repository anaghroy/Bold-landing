import React from "react";
import "../styles/layout/_topsection.scss";
import profile1 from "../assets/Images/Users/profile1.jpg";
import profile5 from "../assets/Images/Users/profile5.jpg";
import profile2 from "../assets/Images/Users/profile2.jpg";
import Stylized from "../assets/Images/Stylized1.png";
const TopSection = () => {
  return (
    <div className="main-topsection">
      <div class="svg-card">
        <svg width="0" height="0" viewBox="0 0 1 1" preserveAspectRatio="none">
          <defs>
            <clipPath id="custom-clip" clipPathUnits="objectBoundingBox">
              <path
                d="M-0.1538 0.0000 0.3846 0.0000 1.0000 0.0000 1.0000 0.8462 0.5000 0.8462C0.4615 0.8462 0.4231 0.7692 0.4615 0.6923 0.4615 0.6154 0.4615 0.6154 0.3462 0.6154H-0.1538L-0.1538 0.0000
          "
              />
            </clipPath>
          </defs>
        </svg>
        <div className="inner">
          <div className="left">
            <span>
              Where we empower you to embrace your unique
              <div className="main-image">
                <div className="image">
                  <img src={profile1} alt="profile1" />
                </div>
                <div className="image">
                  <img src={profile5} alt="profile5" />
                </div>
                <div className="image">
                  <img src={profile2} alt="profile2" />
                </div>
              </div>
              personality and unleash your full potential
            </span>

            <div className="main-button">
              <button>Start Test</button>
              <div className="add">
                <h2>236+</h2>
                <span>Tests taken today</span>
              </div>
              <div className="add">
                <h2>95%</h2>
                <span>Results rated</span>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="outer-image">
              <div className="image">
                <img src={Stylized} alt="Stylized" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="botton">
          <button>Bold personality</button>
        </div>
        <div className="botton">
          <button>Self-discovery</button>
        </div>
        <div className="botton">
          <button>Personal growth</button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
