const jwt = require("jsonwebtoken");

const SECRET = "iwillwin";

// CREATE TOKEN
const createJwt = (payload) => {
  return jwt.sign(payload, SECRET, {
    expiresIn: "1d"
  });
};

// VERIFY TOKEN
function verifyToken(token) {
  return new Promise((resolve) => {
    try {

      const formattedString = token
        .replace("Bearer ", "")
        .trim();

      const decoded = jwt.verify(formattedString, SECRET);
      console.log("DECODED TOKEN:", decoded);

      resolve({
        valid: true,
        userid: decoded.userid || decoded.id || decoded.user?.id  
      });

    } catch (err) {
      resolve({
        valid: false,
        error: err.message
      });
    }
  });
}

module.exports = {
  createJwt,
  verifyToken
};