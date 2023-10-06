const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaEducation = new Schema(
  {
    origins:[],
    copingMechanisms:[],
    triggers:[],
    currentFeelings:[],
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
    },
  }
);

module.exports = schemaEducation;