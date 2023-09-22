const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specificAssessmentSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    answers: { type: [{ type: Number, default: 0 }] },
  },
  {
    toJSON:{virtuals:true},
    virtuals: {
      
        },
    }
);

module.exports = specificAssessmentSchema;