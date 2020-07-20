const controllers = {};
const UserModel = require("../models/userModel");
const { getToken } = require("../helpers/authenticationService");

/**
 * Function to handle login action.
 * @param {Object} req - Express Request object.
 * @param {string} req.body.email - User email to log in.
 * @param {string} req.body.password - User password to log in.
 * @param {Object} res - Express Response object.
 */
controllers.login = async (req, res) => {
  try {
    UserModel.findOne({ email: req.body.email }, async (err, user) => {
      if (err) throw err;

      // If user does not exists
      if (user === null)
        return res
          .status(400)
          .json({ error: true, message: "Wrong user or password" });

      // Check password
      const CORRECT_PASSWORD = await user.comparePassword(req.body.password);

      if (CORRECT_PASSWORD) {
        const token = getToken();
        user = user.toObject();
        delete user.password;
        delete user.updatedAt;
        delete user.__v;
        return res.status(200).json({ error: false, token, user });
      } else {
        return res
          .status(400)
          .json({ error: true, message: "Wrong user or password" });
      }
    });
  } catch (e) {
    res.status(500).json({
      error: true,
      message: "Something went wrong, please contact the admin.",
    });
  }
};

/**
 * Function to check correct session.
 * @param {Object} req - Express Request object.
 * @param {Object} res - Express Response object.
 */
controllers.check = async (req, res) => {
  return res.status(200).json({ error: false, message: "Authorized" });
};

module.exports = controllers;
