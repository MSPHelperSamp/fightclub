import logo from "/logo.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbarSection">
      <img src={logo} alt="logo" />
      <div className="welcome">
        <a href="#Project">Project</a>
        <a href="#Roadmap">Roadmap</a>
        <a href="#JoinClub">Join Club</a>
      </div>
    </nav>
  );
};

export default Navbar;
