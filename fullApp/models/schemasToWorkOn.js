const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const feeling = require('./feelingSchema')

const schemasToWorkOn = new Schema(
  {
    title:String,
    intensity:{type: Number, min:1, max:10},
    feelings:[feeling],
    summary:String
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
    },
  }
);

module.exports = schemasToWorkOn;