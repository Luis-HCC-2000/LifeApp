const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const behaviorSchema = new Schema({
  Tendency: Number, //Figure out how to place the Tendency
  Intensity: Number,
  Reasons: [], //Figure out how to place the reasons
  Date: Date,
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
