import svglogo from "../assets/Images/svglogo.png";
import "../styles/layout/_aboutus.scss";
import Illustration from "../assets/Images/Card/Illustration.png";
import Illustration2 from "../assets/Images/Card/Illustration2.png";
import Illustration3 from "../assets/Images/Card/Full-body.png";
import { MoveUpRight } from "lucide-react";
const Aboutus = () => {
  return (
    <div className="main-about">
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
        <button>About Us</button>
        <div className="svg-card">
          <button>Our Mission</button>
          <svg
            className="bg-shape"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4 2 14 16"
          >
            <path
              d="M-4 2 10 2 10 18-1 18C-1 16 0 16 1 16A1 1 0 00-4 15Zm13 0Q10 2 10 3L10 2m0 16ZL9 18C9 18 10 18 10 17"
              fill="#CD6A4A"
            />
          </svg>
          <img src={Illustration} alt="Illustration" />
          <div className="icon">
            <MoveUpRight className="arrow" color="#f1f8fe" strokeWidth={4} />
          </div>
          <p>
            Our mission is to empower indivuals to embrace their boldness and
            live authenically
          </p>
          <span>
            We belive that everyone passesses unique traits and strengths that,
            when embraced, can lead to personal growth, fulfillment, and
            success.
          </span>
        </div>
        <div className="center-card">
          <button>Our Expertise</button>
          <img src={Illustration2} alt="Illustration2" />
          <div className="text-content">
            <p>
              With years of experience in the field of personality development
              and self-improvement
            </p>
            <span>
              Our professionals hold advanced degrees in psychology and have
              extensive training in coaching and couselling.
            </span>
          </div>
        </div>
        <div className="right-card">
          <button>Our Approach</button>
          <img src={Illustration3} alt="Illustration3" />
          <div className="text-content">
            <p>
              At Bold, we take a holistic approach to help individuals embrace
              their boldness
            </p>
            <span>
              We understand that boldness encompasses various aspects of life,
              including mindset, communication, self-confidence, and
              goal-setting
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
