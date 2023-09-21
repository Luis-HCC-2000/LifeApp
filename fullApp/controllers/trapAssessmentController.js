const userModel = require("../models/userLoginModel");
const { body, validationResult } = require("express-validator");
const lifeTraps = require("../CBT/steps");
const isAuthenticated = require("./authController");

exports.evaluation_get = async (req, res, next) => {
  let client = isAuthenticated(req, res, next);
  let ans = "not found";
  if (client) {
    let questions = lifeTraps.firstAssessment;
    res.render("trapAssessment", { questions: questions });
  } else {
    res.send(ans);
  }
};

exports.evaluation_post = async (req, res, next) => {
  let client = isAuthenticated(req, res, next);
  if (client) {
    let user = await userModel.findOne({ email: client });
    if (user) {
      const categoryValues = {};

      // Loop through the input object and group values by category
      for (const key in req.body) {
        const category = key.replace(/\d+$/, ""); // Extract the category name without the number
        const value = req.body[key];

        if (!categoryValues[category]) {
          categoryValues[category] = []; // Initialize an array for the category if it doesn't exist
        }

        categoryValues[category].push(value);
      }
      user.lifeTrapsAssessments.push(categoryValues)
      await user.save()
      res.send(user.lifeTrapsAssessments);
    }
  }
};
