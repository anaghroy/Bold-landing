import "../styles/layout/_footer.scss";
import footerImg from "../assets/Images/footer.png";
import Logo from "../assets/Images/Logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-card">
        {/* Left Section */}
        <div className="footer-left">
          <div className="para">
            <p>
              Take our Bold Personality Assessment, Leadership Potential
              Assessment, and Risk-Taking Profile
            </p>
          </div>

          <div className="image-wrap">
            <img src={footerImg} alt="Footer Illustration" />
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <nav className="footer-links">
            <a href="#">Home</a>
            <a href="#">Personality Types</a>
            <a href="#">Teams</a>
            <a href="#">Resources</a>
          </nav>

          <div className="footer-bottom">
            <div className="brand">
              <img src={Logo} alt="Bold logo" />
              <span>Bold</span>
            </div>

            <div className="social-icons">
              <button>
                <Twitter />
              </button>
              <button>
                <Instagram />
              </button>
              <button>
                <Facebook />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
