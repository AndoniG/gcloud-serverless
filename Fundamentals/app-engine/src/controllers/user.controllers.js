const controllers = {};
const UserModel = require("../models/userModel");

/**
 * Function to create a new user for the APP.
 * @param {Object} req - Express Request object.
 * @param {string} req.body.email - User's email to log in.
 * @param {string} req.body.password - User's password to log in.
 * @param {string} req.body.name - User's name
 * @param {Object} res - Express Response object.
 */
controllers.createUser = async (req, res) => {
  try {
    const USER_EXISTS = await UserModel.findOne({ email: req.body.email });

    if (USER_EXISTS) {
      return res.status(400).json({
        error: true,
        message: "Email already registered in platform!",
      });
    }

    await UserModel.create(req.body);

    res
      .status(200)
      .json({ error: false, message: "Account created Successfully!" });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ error: true, message: "Something went wrong, please try again" });
  }
};

/**
 * Function to create a new user for the APP.
 * @param {Object} req - Express Request object.
 * @param {Object} res - Express Response object.
 */
controllers.getUsers = async (req, res) => {
  try {
    const USERS = await UserModel.find();
    res.status(200).json(USERS);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
};

/**
 * Function to get the data of an specific user based on its ID.
 * @param {Object} req - Express Request object.
 * @param {string} req.params.id - User's DB ID.
 * @param {Object} res - Express Response object.
 */
controllers.getUser = async (req, res) => {
  try {
    const USER = await UserModel.findById(req.params.id);
    if (!USER)
      res.status(404).json({ error: false, message: "Account not found!" });

    res.status(200).json(USER);
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ error: true, message: "Something went wrong, please try again" });
  }
};

/**
 * Function to update the data of an specific user based on its ID.
 * @param {Object} req - Express Request object.
 * @param {string} req.params.id - User's DB ID.
 * @param {string} [req.body.name] - User's name.
 * @param {string} [req.body.email] - User's email.
 * @param {string} [req.body.password] - User's password.
 * @param {Object} res - Express Response object.
 */
controllers.updateUser = async (req, res) => {
  try {
    const PASSWORD = req.body.password || false;

    if (PASSWORD) {
      delete req.body.password;
    }

    let updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (PASSWORD) {
      updatedUser.password = PASSWORD;
      updatedUser.save();
    }

    if (!updatedUser) {
      return res.status(404).json({
        error: true,
        message: "Data update failed. Account not found",
      });
    }

    updatedUser = updatedUser.toObject();
    delete updatedUser.__v;
    delete updatedUser.updatedAt;
    delete updatedUser.password;

    res.status(200).json({
      error: false,
      message: "Account updated Successfully!",
      data: updatedUser,
    });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json({
        error: true,
        message: "Email already registered in platform!",
      });
    }

    return res
      .status(500)
      .json({ error: true, message: "Something went wrong, please try again" });
  }
};

/**
 * Function to delete the data of an specific user based on its ID.
 * @param {Object} req - Express Request object.
 * @param {string} req.params.id - User's DB ID.
 * @param {Object} res - Express Response object.
 */
controllers.deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      error: false,
      message: "Account deleted Successfully!",
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ error: true, message: "Something went wrong, please try again" });
  }
};

module.exports = controllers;
