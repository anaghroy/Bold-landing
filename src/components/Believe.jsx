import "../styles/layout/_believe.scss";
import believe from "../assets/Images/believe.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const Believe = ({ data1, data2 }) => {
  return (
    <div className="main-believe">
      <div className="wrapper">
        <div className="left">
          <p>
            We believe that boldness encompasses a range of distinct
            characteristics that define and empower individuals
          </p>
          <span>
            These bold traits are not limited to a single definition but form a
            vibrant specturm of qualities that, when embraced, can lead to
            personal growth, resilience, and success.
          </span>
          <div className="apps">
            <div className="apple">
              <FontAwesomeIcon icon={faApple} color="#0c2e37" size="2xl" />
              <span>App Store</span>
            </div>
            <div className="google">
              <FontAwesomeIcon icon={faGooglePlay} color="#0c2e37" size="2xl" />
              <span>Google Play</span>
            </div>
          </div>
          <button className="btn">Download the App</button>
        </div>
        <div className="right">
          <div className="btn">
            <span>Bold Traits</span>
          </div>
          <div className="flex-container">
            <div className="left">
              {data1.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="inner" key={index}>
                    <div className="icon">
                      <Icon className="up" color={item.iconColor} />
                    </div>
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
            <div className="left">
              {data2.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="inner" key={index}>
                    <div className="icon">
                      <Icon className="up" color={item.iconColor} />
                    </div>
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="image-container">
            <img src={believe} alt="believe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Believe;
