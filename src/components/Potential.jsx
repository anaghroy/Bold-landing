import { MoveUpRight } from "lucide-react";
import "../styles/layout/_potential.scss";

const Potential = () => {
  return (
    <section className="potential">
      <div className="potential-card">
        {/* SVG Background */}
        <svg
          className="bg-shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 7 21.39 7"
          preserveAspectRatio="none"
        >
          <path
            d="M0 7l0 7ZL20 7C22 7 22 11 19 10 20 10 20 12 19 12 20 13 19 14 18 14L1 14Q0 14 0 13"
            fill="#416446"
          />
        </svg>

        {/* Content */}
        <div className="content">
          <p>
            Are you ready to uncover your boldness and embrace your true
            potential?
          </p>
        </div>

        {/* Decorative Elements */}
        <span className="circle yellow" />
        <span className="circle orange" />

        {/* Action Button */}
        <button className="action-btn">
          <MoveUpRight />
        </button>
      </div>
    </section>
  );
};

export default Potential;
