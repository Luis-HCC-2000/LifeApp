const userModel = require("../models/userLoginModel");
const asyncHandler = require("express-async-handler");
const router = require("../routes/login");
const { body, validationResult } = require("express-validator");

exports.login_get = (req, res, next) => {
  res.render("login");
};

exports.login_post = [
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
        return false
      }
      return true;
    }).withMessage('Email already in use'),
  body("password").notEmpty().escape(),
  body("confirmPassword")
    .notEmpty()
    .escape()
    .custom(function (confirmPassword, { req }) {
      return confirmPassword === req.body.password;
    }).withMessage("Passwords doesnt match"),
    (req,res)=>{
        const result=validationResult(req)
        if (result.isEmpty()){
            const newUser= new userModel({
                birthDate:req.body.birthDate,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email:req.body.email,
                password:req.body.password
            })
            
        }else{
            res.render("signup" {errors: result.array()})
        }
        
        
    }
];
