const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {

  const token = req.header("x-auth-token");


  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

    const role = decoded.role;


    if (role === "Admin") {
      return next(); 
    } else {
      return res.status(401).json({ message: "Access denied. Unauthorized role." });
    }
  } catch (err) {

    console.error(err.message);
    return res.status(401).json({ message: "Access denied. Invalid token." });
  }
};