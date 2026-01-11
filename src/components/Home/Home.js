import styles from "./Home.module.css";
import download1 from "./components/images/download1.png";

function Home() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "#000",
        paddingTop: 0,
        paddingBottom: 0,
        width: "100%",
      }}
    >
      <div className="container-fluid" style={{ width: "100%" }}>
        <img src={download1} alt="Logo" height="50px" />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "white", marginTop: "20px" }}
            ></i>

            <li className="nav-item" style={{ width: "150px" }}>
              <p
                className="navbar-text mb-0"
                style={{ lineHeight: 0.02, paddingTop: "11px" }}
              >
                <a
                  href="#"
                  className="nav-link d-block text-secondary"
                  style={{ fontSize: "10px" }}
                >
                  Delivering to Thrissur 680001
                </a>
                <a
                  href="#"
                  className="nav-link d-block text-white fw-bold"
                  style={{ fontSize: "12px" }}
                >
                  Update Location
                </a>
              </p>
            </li>

            <form
              className="search-wrapper"
              action="#"
              method="get"
              style={{ marginLeft: "20px" }}
            >
              <div
                className="input-group"
                style={{ maxWidth: "600px", width: "100%" }}
              >
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ background: "#f5f5f2" }}
                >
                  All
                </button>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search…"
                  aria-label="Search"
                />
                <button className="btn btn-warning" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>

            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                background: "#000",
                height: "50px",
                width: "140px",
                lineHeight: "0.5px",
                marginTop: "5px",
                border: "none",
              }}
            >
              <span
                className="nav-link d-block text-secondary"
                style={{ fontSize: "12px" }}
              >
                Hello, Sign In
              </span>
              <span
                className="nav-link d-block text-white fw-bold"
                style={{ fontSize: "14px" }}
              >
                Account & Lists
              </span>
            </button>

            <p
              className="navbar-text mb-0"
              style={{
                lineHeight: 0.02,
                paddingTop: "11px",
                width: "80px",
              }}
            >
              <a
                href="#"
                className="nav-link d-block text-secondary"
                style={{ fontSize: "12px" }}
              >
                Returns
              </a>
              <a
                href="#"
                className="nav-link d-block text-white fw-bold"
                style={{ fontSize: "14px" }}
              >
                & Orders
              </a>
            </p>

            <div
              className="nav-cart"
              style={{
                color: "white",
                width: "80px",
                paddingTop: "20px",
                fontSize: "18px",
              }}
            >
              <i className="fa-solid fa-cart-arrow-down"></i> Cart
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Home;
