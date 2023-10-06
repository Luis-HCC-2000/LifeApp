const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const learningSchema = new Schema({
  FeelingsRelatedToThatLearning: [],
  Text: String,
  DateOfRegistration: Date,
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This should match the model name you defined for the User schema
  },
  SchemaID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schema", // This should match the model name you defined for the User schema
  },
});
