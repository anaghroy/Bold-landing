import svglogo from "../assets/Images/svglogo.png";
import "../styles/layout/_aboutus.scss";
import Illustration from "../assets/Images/Card/Illustration.png";
import Illustration2 from "../assets/Images/Card/Illustration2.png";
import Illustration3 from "../assets/Images/Card/Full-body.png";
import { MoveUpRight } from "lucide-react";
const Aboutus = () => {
  return (
    <div id="about" className="main-about">
      <div className="topcontent">
        <h1>
          Our mission is to provide individuals with
          <br /> valuable insights into their personality
        </h1>
        <div className="image">
          <img src={svglogo} alt="svglogo" />
        </div>
      </div>

      <div className="main-card">
        <button className="section-btn">About Us</button>

        {/* ===== CARD 1 ===== */}
        <div className="card-col">
          <div className="svg-card">
            <button>Our Mission</button>

            <svg
              className="bg-shape"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-4 2 14 16"
            >
              {" "}
              <path
                d="M-4 2 10 2 10 18-1 18C-1 16 0 16 1 16A1 1 0 00-4 15Zm13 0Q10 2 10 3L10 2m0 16ZL9 18C9 18 10 18 10 17"
                fill="#CD6A4A"
              />{" "}
            </svg>

            <img src={Illustration} alt="Illustration" />

            <div className="icon">
              <MoveUpRight className="arrow" color="#f1f8fe" strokeWidth={4} />
            </div>
          </div>

          <div className="card-text">
            <p>
              Our mission is to empower individuals to embrace their boldness
              and live authentically
            </p>
            <span>
              We believe that everyone possesses unique traits and strengths
              that can lead to personal growth and success.
            </span>
          </div>
        </div>

        {/* ===== CARD 2 ===== */}
        <div className="card-col">
          <div className="center-card">
            <button>Our Expertise</button>
            <img src={Illustration2} alt="Illustration2" />
          </div>

          <div className="card-text">
            <p>
              With years of experience in personality development and
              self-improvement
            </p>
            <span>
              Our professionals hold advanced degrees in psychology and
              extensive coaching experience.
            </span>
          </div>
        </div>

        {/* ===== CARD 3 ===== */}
        <div className="card-col">
          <div className="right-card">
            <button>Our Approach</button>
            <img src={Illustration3} alt="Illustration3" />
          </div>

          <div className="card-text">
            <p>
              At Bold, we take a holistic approach to helping individuals
              embrace their boldness
            </p>
            <span>
              We focus on mindset, communication, confidence, and goal-setting.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
