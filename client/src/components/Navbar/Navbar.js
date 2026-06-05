import { NavLink, useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


function Navbar() {
  const navigate = useNavigate();

  // get logged user
  const user = JSON.parse(localStorage.getItem("user"));

  // logout
  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/Login");
  };
  return (
    <nav className="navbar bg-dark navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink to="/" className="d-flex align-items-center text-white text-decoration-none">
  <span
  style={{
    background: "linear-gradient(90deg, #ff9933, #ffffff, #269b1b)",
    padding: "6px 10px",
    color:"black",
    borderRadius: "6px",
    fontWeight: "bold",
    marginRight: "6px"
  }}
>
  AVM
</span>
</NavLink>
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
              <NavLink to="/Cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{ color: 'white', paddingTop: '6px' }} />
              </NavLink>
            </li>
          </ul>
           <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

            {user ? (
              <>
                <span style={{ color: "white", fontWeight: "500" }}>
                  Hi {user.first_name}
                </span>

                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-sm"
                >
                  Logout
                </button>
              </>
            ) : (
             <NavLink to="/login" className="btn btn-warning btn-sm px-3 rounded-pill shadow-sm">
              Login
            </NavLink>
            )}

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
