import { Eye, Search } from "lucide-react";
import Logo from "../assets/Images/Logo.png";
import "../styles/layout/_navbar.scss";
const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="logo">
        <img src={Logo} alt="logo desgin" />
        <span>Bold</span>
      </div>
      <div className="center">
        <a href="#">Home</a>
        <a href="#">Personality Types</a>
        <a href="#">Teams</a>
        <a href="#">Resouces</a>
      </div>
      <div className="right">
        <Search color="#0c2e37" />
        <Eye color="#0c2e37" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
