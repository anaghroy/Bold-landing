import { Eye, Search } from "lucide-react";
import Logo from "../assets/Images/Logo.png";
import "../styles/layout/_navbar.scss";
const Navbar = ({navbarRef}) => {
  return (
    <div className="main-navbar">
      <div className="logo">
        <img src={Logo} alt="logo desgin" />
        <span>Bold</span>
      </div>
      <div className="center" ref={navbarRef}>
        <a href="#home">Home</a>
        <a href="#about">Personality Types</a>
        <a href="#teams">Teams</a>
        <a href="#resouces">Resouces</a>
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
