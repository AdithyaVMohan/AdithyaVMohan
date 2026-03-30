import { NavLink } from "react-router-dom";
import styles from "./Home.module.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-body" style={{backgroundColor: "#000"}} data-bs-theme="dark">
      <div className="container-fluid">
        <img src="/images/adithyalogo.jpeg" alt="logo" height={22} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`${styles.customNavItem} navbar-nav ms-auto mb-2 mb-lg-0`}>
            <li className="nav-item mx-4">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink to="/AboutMe" className="nav-link">About Me</NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink to="/Projects" className="nav-link">Projects</NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink to="/Experience" className="nav-link">Experience</NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink to="/Certifications" className="nav-link">Certifications</NavLink>
            </li>
            {/* <li className="nav-item mx-4">
              <NavLink to="/Contact" className="nav-link">Contact</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
