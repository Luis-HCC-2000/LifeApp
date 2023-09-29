const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const behaviorSchema = new Schema(
  {
    title:String,
    intensity:{type: Number, min:1, max:10},
    triggers:{}
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
    },
  }
);

module.exports = behaviorSchema;