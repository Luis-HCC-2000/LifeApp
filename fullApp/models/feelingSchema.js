const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feeling = new Schema(
  {
    title:String,
    intensity:{type: Number, min:1, max:10},
    schemaTitle:String,
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
    },
  }
);

module.exports = feeling;