import download1 from "../images/download1.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


function Navbar() {
  return (
    <nav className="navbar bg-dark navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <img src={download1} alt="logo" height={48} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/ProductList" className="nav-link">Products</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/AboutUs" className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/ContactUs" className="nav-link">Contact Us</NavLink>
            </li>
            
            <li className="nav-item mx-3">
              <NavLink to="/Cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{ color: 'white', paddingTop: '6px' }} />
              </NavLink>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
