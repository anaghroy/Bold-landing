import { MoveUpRight } from "lucide-react";
import types1 from "../assets/Images/Types/types1.png";
import types2 from "../assets/Images/Types/types2.png";
import profile2 from "../assets/Images/Users/profile2.jpg";
import "../styles/layout/_types.scss";
const Types = () => {
  return (
    <div id="teams" className="main-types">
      <div className="image">
        <img src={types1} alt="types1" />
      </div>
      <div className="svg-card">
        <button>Personality Types</button>
        <div className="text-content">
          <div className="text-line">
            <span className="label">Test Description:</span>

            <div className="main-image">
              <img src={profile2} alt="profile2" />
            </div>
          </div>

          <p className="description">
            Discover Your Personality Type, Relationship Compatibility Test,
            Career Aptitude Test.
          </p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 2 12 13">
          <path
            d="M-2 4C-2 3-2 2-1 2 2 2 6 2 10 2l0 13L0 15C0 14 0 13 2 12A1 1 0 00-2 12Zm12-1V2L9 2Z"
            fill="#CD6A4A"
          />
        </svg>
        <img src={types2} alt="types2" />
        <div className="icon">
          <MoveUpRight className="arrow" color="#f1f8fe" strokeWidth={4} />
        </div>
      </div>
    </div>
  );
};

export default Types;
