const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const intensityRecordSchema = new Schema({
  Date: Date,
  Intensity: Number,
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This should match the model name you defined for the User schema
  },
  SchemaID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schema", // This should match the model name you defined for the User schema
  },
});
