const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const specificAssessmentSchema = require("./specificAssesmentSchema");

const specificAssessmentsSchema = new Schema(
  {
    "Emotional Deprivation": [specificAssessmentSchema],
    "Abandonment/Instability": [specificAssessmentSchema],
    "Mistrust/Abuse": [specificAssessmentSchema],
    "Social Isolation/Alienation": [specificAssessmentSchema],
    "Defectiveness/Shame": [specificAssessmentSchema],
    "Failure to Achieve": [specificAssessmentSchema],
    "Dependence/Incompetence": [specificAssessmentSchema],
    "Vulnerability to Harm or Illness": [specificAssessmentSchema],
    "Enmeshment/Undeveloped Self": [specificAssessmentSchema],
    Subjugation: [specificAssessmentSchema],
    "Self-Sacrifice": [specificAssessmentSchema],
    "Approval-Seeking/Recognition-Seeking": [specificAssessmentSchema],
    "Negativity/Pessimism": [specificAssessmentSchema],
    "Emotional Inhibition": [specificAssessmentSchema],
    "Unrelenting Standards/Hypercriticalness": [specificAssessmentSchema],
    "Entitlement/Grandiosity": [specificAssessmentSchema],
    "Insufficient Self-Control/Self-Discipline": [specificAssessmentSchema],
    "Other-Directedness": [specificAssessmentSchema],
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
      getAnsweredSchemas: {
        get() {
          let answeredSchemas = {};
          for (let key in Object.keys(this.toObject)) {
            if (this[key].length > 0) {
              let lastValue = this[key][this[key].length - 1];
              answeredSchemas[key] = lastValue;
            }
          }
          return answeredSchemas
        },
      },
      getSumOfAnsweredSchemas: {
        get() {
          let answer = {};
          let answeredSchemas = this.getAnsweredSchemas;
          for (let key in answeredSchemas) {
            answer[key] = answeredSchemas[key].reduce((accumulator, currentValue) => {
              return accumulator + currentValue;
            }, 0);
          }
          return answer;
        },
      },
    },
  }
);

module.exports = specificAssessmentsSchema;
