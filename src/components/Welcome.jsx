import "../styles/layout/_welcome.scss";
import transparentgirl from "../assets/Images/Uniques/transparentgirl.png";
import transparentboy from "../assets/Images/Uniques/transparentboy.png";
const Welcome = () => {
  return (
    <div className="main-welcome">
      <div className="image">
        <img src={transparentgirl} alt="transparentgirl" />
      </div>
      <div className="circle"></div>
      <div className="circle1"></div>
      <div className="center-text">
        <p>
          "Welcome to Bold, where we belive in the <br />
          transformative power of embracing your <br />
          uniqueness and living fearlessly"
        </p>
        <h6>Ghea, your bold CEO</h6>
      </div>
      <div className="bottom-image">
        <img src={transparentboy} alt="transparentboy" />
      </div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="circle5"></div>
    </div>
  );
};

export default Welcome;
