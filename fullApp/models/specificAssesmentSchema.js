const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const feelingSchema = require('./feelingSchema')

const specificAssessmentSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    answers: { type: [{ type: Number, default: 0 }] },
    feelings:[feelingSchema],
    behaviors:[],
  },
  {
    toJSON:{virtuals:true},
    virtuals: {
      
        },
    }
);

module.exports = specificAssessmentSchema;