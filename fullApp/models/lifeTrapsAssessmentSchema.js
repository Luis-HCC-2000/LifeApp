const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lifeTrapsAssessmentSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    "Emotional Deprivation": { type: [{ type: Number, default: 0 }] },
    "Abandonment/Instability": { type: [{ type: Number, default: 0 }] },
    "Mistrust/Abuse": { type: [{ type: Number, default: 0 }] },
    "Social Isolation/Alienation": { type: [{ type: Number, default: 0 }] },
    "Defectiveness/Shame": { type: [{ type: Number, default: 0 }] },
    "Failure to Achieve": { type: [{ type: Number, default: 0 }] },
    "Dependence/Incompetence": { type: [{ type: Number, default: 0 }] },
    "Vulnerability to Harm or Illness": { type: [{ type: Number, default: 0 }] },
    "Enmeshment/Undeveloped Self": { type: [{ type: Number, default: 0 }] },
    Subjugation: { type: [{ type: Number, default: 0 }] },
    "Self-Sacrifice": { type: [{ type: Number, default: 0 }] },
    "Approval-Seeking/Recognition-Seeking": { type: [{ type: Number, default: 0 }] },
    "Negativity/Pessimism": { type: [{ type: Number, default: 0 }] },
    "Emotional Inhibition": { type: [{ type: Number, default: 0 }] },
    "Unrelenting Standards/Hypercriticalness": { type: [{ type: Number, default: 0 }] },
    "Entitlement/Grandiosity": { type: [{ type: Number, default: 0 }] },
    "Insufficient Self-Control/Self-Discipline": { type: [{ type: Number, default: 0 }] },
    "Other-Directedness": { type: [{ type: Number, default: 0 }] },
  },
  {
    toJSON:{virtuals:true},
    virtuals: {
      getSumOfAllSchemas:{
        get() {
        return {
          "Emotional Deprivation":this["Emotional Deprivation"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Abandonment/Instability":this["Abandonment/Instability"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Mistrust/Abuse":this["Mistrust/Abuse"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Social Isolation/Alienation":this["Social Isolation/Alienation"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Defectiveness/Shame":this["Defectiveness/Shame"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Failure to Achieve":this["Failure to Achieve"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Dependence/Incompetence":this["Dependence/Incompetence"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Vulnerability to Harm or Illness":this["Vulnerability to Harm or Illness"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Enmeshment/Undeveloped Self":this["Enmeshment/Undeveloped Self"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          Subjugation:this["Subjugation"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Self-Sacrifice":this["Self-Sacrifice"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Approval-Seeking/Recognition-Seeking":this["Approval-Seeking/Recognition-Seeking"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Negativity/Pessimism":this["Negativity/Pessimism"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Emotional Inhibition":this["Emotional Inhibition"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Unrelenting Standards/Hypercriticalness":this["Unrelenting Standards/Hypercriticalness"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Entitlement/Grandiosity":this["Entitlement/Grandiosity"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Insufficient Self-Control/Self-Discipline":this["Insufficient Self-Control/Self-Discipline"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
          "Other-Directedness":this["Other-Directedness"].reduce((accumulator, currentValue)=>{return accumulator + currentValue},0),
        }}
    },
    sortedSchemas:{
      get(){
        let categorizedResult={low:[], medium:[], high:[]}
        let schemasSum=this.getSumOfAllSchemas
        for (const key in schemasSum) {
          const value = schemasSum[key];
          if (value < 7) {
            categorizedResult["low"].push({schema:key, value:value})
          } else if (value < 14) {
            categorizedResult["medium"].push({schema:key, value:value})
          } else {
            categorizedResult["high"].push({schema:key, value:value})
          }
        }
        return categorizedResult;
      }
    },
    sortedSchemasWithUrl:{
      get(){
            let categorizedResult={low:[], medium:[], high:[]}
            let schemasSum=this.getSumOfAllSchemas
            for (const key in schemasSum) {
              const value = schemasSum[key];
              if (value < 7) {
                categorizedResult["low"].push({schema:key, value:value, urlLink:"trapEvaluation/"+(encodeURIComponent(key))})
              } else if (value < 14) {
                categorizedResult["medium"].push({schema:key, value:value, urlLink:"trapEvaluation/"+(encodeURIComponent(key))})
              } else {
                categorizedResult["high"].push({schema:key, value:value ,urlLink: "trapEvaluation/"+ (encodeURIComponent(key))})
              }
            }
            return categorizedResult;
          }
        },
    }
  }
);

// lifeTrapsAssessmentSchema.methods.getSumOfCategory=function(title) {
//       let sum = 0;
//       for (let index = 0; index < this.lifeTraps[title].length; index++) {
//         const element = this[title][index];
//         sum += element;
//       }
//       return sum;
//     },

module.exports = lifeTrapsAssessmentSchema;
