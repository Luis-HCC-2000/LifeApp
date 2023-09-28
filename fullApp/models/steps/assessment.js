const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assessment = new Schema(
  {
    title:String,
    intensity:{type: Number, min:1, max:10},
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
    },
  }
);

module.exports = feeling;