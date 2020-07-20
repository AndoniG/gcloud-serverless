const services = {};
const jwt = require("jsonwebtoken");

services.getToken = () => {
  return jwt.sign({ verified: true }, process.env.KEY, {
    expiresIn: "1d",
  });
};

services.validateToken = async (req, res, next) => {
  try {
    const TOKEN = req.headers["token"];
    if (TOKEN) {
      result = await jwt.verify(TOKEN, process.env.KEY);
      if (result) {
        next();
      } else {
        throw new Error();
      }
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(401).json({ error: true, message: "User not authorized." });
  }
};

module.exports = services;
