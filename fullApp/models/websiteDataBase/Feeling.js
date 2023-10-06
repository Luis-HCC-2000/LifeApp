const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feelingSchema = new Schema({
  NameOfFeeling: String,
  TextRelatedToFeeling: [], //make a relationship with texts
  DateOfRegistration: Date,
  SchemaId: [], //Figure out how to link to id of Schema
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This should match the model name you defined for the User schema
  },
  SchemaID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schema", // This should match the model name you defined for the User schema
  },
});

const Feeling = mongoose.model("Feeling", feelingSchema);

module.exports = Feeling;
