const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const triggerSchema = new Schema(
  {
    title:String,
    hoursItHappens: [{type:Date}]
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
    },
  }
);

module.exports = triggerSchema;