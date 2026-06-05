import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    address: "",
    place: "",
    city: "",
    district: "",
    state: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/",
        formData
      );

      localStorage.setItem("token", res.data.data.token);

      alert("Signup Successful");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account 🚀</h2>
        <p style={styles.subtitle}>Join and start shopping</p>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSignup} style={styles.form}>
          <div style={styles.grid}>
            <input name="first_name" placeholder="First Name" onChange={handleChange} style={styles.input} />
            <input name="last_name" placeholder="Last Name" onChange={handleChange} style={styles.input} />
            <input type="date" name="dob" onChange={handleChange} style={styles.input} />

            <input name="email" placeholder="Email" onChange={handleChange} style={styles.input} />
            <input name="phone" placeholder="Phone" onChange={handleChange} style={styles.input} />

            <input name="username" placeholder="Username" onChange={handleChange} style={styles.input} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} style={styles.input} />

            <input name="address" placeholder="Address" onChange={handleChange} style={styles.inputFull} />
            <input name="place" placeholder="Place" onChange={handleChange} style={styles.input} />
            <input name="city" placeholder="City" onChange={handleChange} style={styles.input} />
            <input name="district" placeholder="District" onChange={handleChange} style={styles.input} />
            <input name="state" placeholder="State" onChange={handleChange} style={styles.input} />
          </div>

          <button type="submit" style={styles.button}>
            Create Account
          </button>

          <p style={styles.footer}>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} style={styles.link}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #ab73e2)",
    fontFamily: "Arial",
    padding: "20px",
  },

  card: {
    width: "450px",
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },

  title: {
    textAlign: "center",
    marginBottom: "5px",
  },

  subtitle: {
    textAlign: "center",
    color: "gray",
    marginBottom: "15px",
    fontSize: "13px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "13px",
    outline: "none",
  },

  inputFull: {
    gridColumn: "span 2",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  error: {
    color: "red",
    textAlign: "center",
    fontSize: "13px",
  },

  footer: {
    textAlign: "center",
    fontSize: "13px",
    marginTop: "10px",
    color: "gray",
  },

  link: {
    color: "#667eea",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Signup;