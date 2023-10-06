const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueSchema= require('./allSchemasSubSchemas/uniqueSchema')

const allSchemas = new Schema({
  "Emotional Deprivation":uniqueSchema,
  "Abandonment/Instability":uniqueSchema,
  "Mistrust/Abuse":uniqueSchema,
  "Social Isolation/Alienation":uniqueSchema,
  "Defectiveness/Shame":uniqueSchema,
  "Failure to Achieve":uniqueSchema,
  "Dependence/Incompetence":uniqueSchema,
  "Vulnerability to Harm or Illness":uniqueSchema,
  "Enmeshment/Undeveloped Self":uniqueSchema,
  "Subjugation":uniqueSchema,
  "Self-Sacrifice":uniqueSchema,
  "Approval-Seeking/Recognition-Seeking":uniqueSchema,
  "Negativity/Pessimism":uniqueSchema,
  "Emotional Inhibition":uniqueSchema,
  "Unrelenting Standards/Hypercriticalness":uniqueSchema,
  "Entitlement/Grandiosity":uniqueSchema,
  "Insufficient Self-Control/Self-Discipline":uniqueSchema,
  "Other-Directedness":uniqueSchema,
  },);

  
  module.exports = allSchemas;
