const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RelationshipProblemSchema = new Schema({
  text: String,
  Behaviors: [], //Figure out how to link that to different behaviors
  personsInvolved: String,
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This should match the model name you defined for the User schema
  },
  SchemaID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schema", // This should match the model name you defined for the User schema
  },
});
