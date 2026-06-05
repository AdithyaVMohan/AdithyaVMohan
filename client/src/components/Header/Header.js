function Header(){
    return(
        <div>
            <div style={{
                background: "#111", color: "#fff", textAlign: "center", padding: "10px 16px",
                fontSize: 13, fontWeight: 500, letterSpacing: 0.2,
            }}>
                Sign up and get 20% off your first order.{" "}
                <span style={{ fontWeight: 800, textDecoration: "underline", cursor: "pointer" }}>Sign Up Now</span>
                <span style={{ float: "right", cursor: "pointer", marginTop: -1 }}>✕</span>
            </div>
        </div>
    )
}
export default Header;

