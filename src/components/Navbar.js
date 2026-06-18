import { useRef, useEffect } from "react";
import styles from "./Home.module.css";

function Navbar() {
  const collapseRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      collapseRef.current &&
      !collapseRef.current.contains(event.target) &&
      !event.target.closest(".navbar-toggler")
    ) {
      const bsCollapse =
        window.bootstrap?.Collapse.getInstance(collapseRef.current);

      bsCollapse?.hide();
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

  const closeNavbar = () => {
    const bsCollapse = window.bootstrap?.Collapse.getInstance(collapseRef.current);
    bsCollapse?.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container-fluid">

        <img src="/images/adithyalogo.jpeg" alt="logo" height={22} />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={collapseRef}
        >

          <ul className={`${styles.customNavItem} navbar-nav ms-auto mb-2 mb-lg-0`}>

            <li className="nav-item mx-4">
              <button className="nav-link btn btn-link text-light"
                onClick={() => {
                scrollToSection("home");
                closeNavbar();}}>
                Home
              </button>
            </li>

            <li className="nav-item mx-4">
              <button className="nav-link btn btn-link text-light"
                onClick={() => {
                scrollToSection("about");
                closeNavbar();}}>
                About Me
              </button>
            </li>

            <li className="nav-item mx-4">
              <button className="nav-link btn btn-link text-light"
                onClick={() =>{scrollToSection("projects");closeNavbar();}}>
                Projects
              </button>
            </li>

            <li className="nav-item mx-4">
              <button className="nav-link btn btn-link text-light"
                onClick={() => {scrollToSection("experience");closeNavbar();}}>
                Experience
              </button>
            </li>

            <li className="nav-item mx-4">
              <button className="nav-link btn btn-link text-light"
                onClick={() =>{scrollToSection("certifications");closeNavbar();}}>
                Certifications
              </button>
            </li>

            <li className="nav-item ms-lg-3">
              <a
                href="/AdithyaVMohan_MERN_Stack_Developer.pdf"
                download
                className="btn btn-success"
              >
                Download CV
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
