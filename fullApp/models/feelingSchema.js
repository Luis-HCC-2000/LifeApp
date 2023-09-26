const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feeling = new Schema(
  {
    title:String,
    priority:{type: Number, min:1, max:10},
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
    },
  }
);

module.exports = feeling;