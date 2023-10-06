const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lifeTrapSchema = new Schema({
  Category: String,
  Priority: Number, //Figure out how to link to id of Schema
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This should match the model name you defined for the User schema
  },
});

const lifeTrap = mongoose.model("Schema", lifeTrapSchema);

module.exports = lifeTrap;
