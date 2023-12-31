const userModel = require("../models/userLoginModel");
const { body, validationResult } = require("express-validator");
const allTraps = require("../CBT/allTraps");
const isAuthenticated = require("./authController");

exports.evaluation_get = async (req, res, next) => {
  const info = allTraps[req.params["schema"]];
  let ans = "user Not found";
  let client = isAuthenticated(req, res, next);
  if (client) {
    let user = await userModel.findOne({ email: client });
    if (user) {
      res.render("specificAssessment", { info: info, title: req.params["schema"]});
    }
  } else {
    //TODO redirect to login so after loggin in the redirect should take me here
    res.send(ans);
  }
};

exports.evaluation_post = async (req, res, next) => {
  let client = isAuthenticated(req, res, next);
  if (client) {
    let user = await userModel.findOne({ email: client });
    if (user) {
      let answers = [];
      let feelings=[]
      for (const key in req.body) {
        if (key=="schema"){continue}
        if (isNaN(key)){
          feelings.push({title:key, intensity:req.body[key]})
        }else{
          answers.push(req.body[key])
        }
      }
      user.specificAssessments[req.body['schema']].push({answers:answers, feelings:feelings})
      await user.save();
      res.redirect('/home');
    }
  }
};
