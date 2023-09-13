const userModel = require("../models/userLoginModel");
const asyncHandler = require("express-async-handler");
const router = require("../routes/login");
const { body, validationResult } = require("express-validator");

exports.signup_get = (req, res, next) => {
  res.render("login");
};

exports.signup_post = [
  body("birthdate").notEmpty().escape(),
  body("firstName").notEmpty().escape(),
  body("lastName").notEmpty().escape(),
  body("email")
    .notEmpty()
    .escape()
    .isEmail()
    .custom(async function (email) {
      let user = await userModel.findOne({ email: email });
      if (user) {
        return false;
      }
      return true;
    })
    .withMessage("Email already in use"),
  body("password").notEmpty().escape().isLength({min:6}).withMessage("Password must be at least 6 characters long"),
  body("confirmPassword")
    .notEmpty()
    .escape()
    .custom(function (confirmPassword, { req }) {
      return confirmPassword === req.body.password;
    })
    .withMessage("Passwords doesnt match"),
  async (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const newUser = new userModel({
        birthDate: req.body.birthDate,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });
      await newUser.save();
      let session = req.session;
      session.userid = req.body.email;
    } else {
      let errorMessage = "";
      for (let error in result.array()) {
        errorMessage += result.array()[error].msg;
      }
      next(new Error(errorMessage));
    }
  },
];

exports.login_get = (req, res, next) => {
  res.render("register/login");
};

exports.login_post = [
  body("email")
    .notEmpty()
    .escape()
    .isEmail()
    .toLowerCase()
    .custom(async function () {
      let user = await userModel.findOne({ email: req.body.email });
      if (user) {
        return true;
      }
      return false;
    })
    .withMessage("Email not found"),
  body("password").notEmpty().escape(),
  async (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      let session = req.session;
      session.userid = req.body.email;
      res.redirect("/home");
    } else {
      let errorMessage = "";
      for (let error in result.array()) {
        errorMessage += result.array()[error].msg;
      }
      next(new Error(errorMessage));
    }
  },
];
