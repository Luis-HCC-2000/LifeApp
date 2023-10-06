const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BasicAssessmentSchema = new Schema({
  answers:[{Type: Number}],
  questions:[{Type: String}],
  Date:Date,
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This should match the model name you defined for the User schema
  },
  SchemaID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schema", // This should match the model name you defined for the User schema
  },
});

const Behavior = mongoose.model("Behavior", behaviorSchema);

module.exports = Behavior;
