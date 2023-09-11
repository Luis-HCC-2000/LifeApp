const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lifeTrapsAssessmentSchema= new Schema({
    user:{type: Schema.Types.String, ref:"User", required:true},
    "Emotional Deprivation":{type: [{type:Number}]},
    "Abandonment/Instability":{type: [{type:Number}]},
    "Mistrust/Abuse":{type: [{type:Number}]},
    "Social Isolation/Alienation":{type: [{type:Number}]},
    "Defectiveness/Shame":{type: [{type:Number}]},
    "Failure to Achieve":{type: [{type:Number}]},
    "Dependence/Incompetence":{type: [{type:Number}]},
    "Vulnerability to Harm or Illness":{type: [{type:Number}]},
    "Enmeshment/Undeveloped Self":{type: [{type:Number}]},
    "Subjugation":{type: [{type:Number}]},
    "Self-Sacrifice":{type: [{type:Number}]},
    "Approval-Seeking/Recognition-Seeking":{type: [{type:Number}]},
    "Negativity/Pessimism":{type: [{type:Number}]},
    "Emotional Inhibition":{type: [{type:Number}]},
    "Unrelenting Standards/Hypercriticalness":{type: [{type:Number}]},
    "Entitlement/Grandiosity":{type: [{type:Number}]},
    "Insufficient Self-Control/Self-Discipline":{type: [{type:Number}]},
    "Other-Directedness":{type: [{type:Number}]},
}, {virtuals:{
    getSum:{
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

const lifeTrapAssessment = mongoose.model('lifeTrapAssessment', lifeTrapsAssessmentSchema)
module.exports = lifeTrapAssessment