const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lifeTrapsAssessmentSchema= new Schema({
    date:{type: Date, default:Date.now},
    "Emotional Deprivation":{type: [{type:Number, default: 0}]},
    "Abandonment/Instability":{type: [{type:Number, default: 0}]},
    "Mistrust/Abuse":{type: [{type:Number, default: 0}]},
    "Social Isolation/Alienation":{type: [{type:Number, default: 0}]},
    "Defectiveness/Shame":{type: [{type:Number, default: 0}]},
    "Failure to Achieve":{type: [{type:Number, default: 0}]},
    "Dependence/Incompetence":{type: [{type:Number, default: 0}]},
    "Vulnerability to Harm or Illness":{type: [{type:Number, default: 0}]},
    "Enmeshment/Undeveloped Self":{type: [{type:Number, default: 0}]},
    "Subjugation":{type: [{type:Number, default: 0}]},
    "Self-Sacrifice":{type: [{type:Number, default: 0}]},
    "Approval-Seeking/Recognition-Seeking":{type: [{type:Number, default: 0}]},
    "Negativity/Pessimism":{type: [{type:Number, default: 0}]},
    "Emotional Inhibition":{type: [{type:Number, default: 0}]},
    "Unrelenting Standards/Hypercriticalness":{type: [{type:Number, default: 0}]},
    "Entitlement/Grandiosity":{type: [{type:Number, default: 0}]},
    "Insufficient Self-Control/Self-Discipline":{type: [{type:Number, default: 0}]},
    "Other-Directedness":{type: [{type:Number, default: 0}]},
}, {virtuals:{
    getSumOfCategory:{
        get(title){
            let sum=0
            for (let index = 0; index < this[title].length; index++) {
                const element = this[title][index];
                sum+=element
            }
            return sum
        }
    }
}})

module.exports = lifeTrapsAssessmentSchema