const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const utilitySchema = new Schema({
  Category: [], // Either learning, first explanation of why the user developed a schema or a feeling
  Text: [],
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
