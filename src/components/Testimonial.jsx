import "../styles/layout/_testimonial.scss";
import profile1 from "../assets/Images/Users/profile1.jpg";
import profile2 from "../assets/Images/Users/profile2.jpg";
import profile3 from "../assets/Images/Users/profile3.jpg";
import profile4 from "../assets/Images/Users/profile4.jpg";
import profile5 from "../assets/Images/Users/profile5.jpg";
import profile6 from "../assets/Images/Users/profile6.jpg";
const Testimonial = () => {
  return (
    <div className="main-test">
      <div className="outer">
        <div className="image1">
            <img src={profile1} alt="profile1" />
          </div>
          <div className="image2">
            <img src={profile3} alt="profile3" />
          </div>
          <div className="image3">
            <img src={profile4} alt="profile4" />
          </div>
        <div className="center-content">
          <button>Testimonial</button>
          <p>
            "Bold helps me recognize my strengths and
            <br /> step outside my comfprt zone. I'm now living <br /> a more
            fulfilling and adventurous life."
          </p>
          <div className="image">
            <img src={profile2} alt="profile2" />
          </div>
          <p className="text">Amber Augustin</p>
          <span>Adventurner (ISFP-A)</span>
        </div>
        <div className="image4">
            <img src={profile5} alt="profile5" />
          </div>
          <div className="image5">
            <img src={profile6} alt="profile6" />
          </div>
      </div>
    </div>
  );
};

export default Testimonial;
