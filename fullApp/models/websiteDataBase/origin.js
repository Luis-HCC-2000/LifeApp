const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OriginSchema = new Schema({
  FeelingsNotMetAtTheOrigin: [], //Figure out how to place the feelings
  DateOfRegistration: Date,
  DateOfOrigin: String, //figure out how to categorize date of Origin
  Category: String, //Either Origin of feeling or Schema,
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This should match the model name you defined for the User schema
  },
  SchemaID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schema", // This should match the model name you defined for the User schema
  },
});
