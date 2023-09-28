const Abandonment = require("./lifeTraps/Abandonment/Instability");
const ApprovalSeeking = require("./lifeTraps/Approval-Seeking/Recognition-Seeking");
const Defectiveness = require("./lifeTraps/Defectiveness/Shame");
const Dependence = require("./lifeTraps/Dependence/Incompetence");
const Subjugation = require("./lifeTraps/Subjugation");
const enmeshment = require("./lifeTraps/Enmeshment/Undeveloped Self");
const entitlement = require("./lifeTraps/Entitlement/Grandiosity");
const InsufficientSelfControl = require("./lifeTraps/Insufficient Self-Control/Self-Discipline");
const mistrust = require("./lifeTraps/Mistrust/Abuse");
const negativity = require("./lifeTraps/Negativity/Pessimism");
const socialIsolation = require("./lifeTraps/Social Isolation/Alienation");
const unrelentingStandards = require("./lifeTraps/Unrelenting Standards/Hypercriticalness");
const EmotionalDeprivation = require("./lifeTraps/Emotional Deprivation");
const emotionalInhibition = require("./lifeTraps/Emotional Inhibition");
const failureToAchieve = require("./lifeTraps/Failure to Achieve");
const selfSacrifice = require("./lifeTraps/Self-Sacrifice");
const VulnerabilitySchema = require("./lifeTraps/Vulnerability to Harm or Illness");

const allTraps = {
  "Emotional Deprivation": EmotionalDeprivation,
  "Abandonment/Instability": Abandonment,
  "Mistrust/Abuse": mistrust,
  "Social Isolation/Alienation": socialIsolation,
  "Defectiveness/Shame": "falta esto",
  "Failure to Achieve": failureToAchieve,
  "Dependence/Incompetence": Dependence,
  "Vulnerability to Harm or Illness": VulnerabilitySchema,
  "Enmeshment/Undeveloped Self": enmeshment,
  Subjugation: Subjugation,
  "Self-Sacrifice": selfSacrifice,
  "Approval-Seeking/Recognition-Seeking": ApprovalSeeking,
  "Negativity/Pessimism": negativity,
  "Emotional Inhibition": emotionalInhibition,
  "Unrelenting Standards/Hypercriticalness": unrelentingStandards,
  "Entitlement/Grandiosity": entitlement,
  "Insufficient Self-Control/Self-Discipline": InsufficientSelfControl,
  "Other-Directedness": "falta esto",
  getDescriptions: function () {
    let allDescriptions = {};
    allDescriptions["Emotional Deprivation"] = this["Emotional Deprivation"]["description"];
    allDescriptions["Abandonment/Instability"] = this["Abandonment/Instability"]["description"];
    allDescriptions["Mistrust/Abuse"] = this["Mistrust/Abuse"]["description"];
    allDescriptions["Social Isolation/Alienation"] = this["Social Isolation/Alienation"]["description"];
    allDescriptions["Defectiveness/Shame"] = this["Defectiveness/Shame"]["description"];
    allDescriptions["Failure to Achieve"] = this["Failure to Achieve"]["description"];
    allDescriptions["Dependence/Incompetence"] = this["Dependence/Incompetence"]["description"];
    allDescriptions["Vulnerability to Harm or Illness"] = this["Vulnerability to Harm or Illness"]["description"];
    allDescriptions["Enmeshment/Undeveloped Self"] = this["Enmeshment/Undeveloped Self"]["description"];
    allDescriptions["Subjugation"] = this["Subjugation"]["description"];
    allDescriptions["Self-Sacrifice"] = this["Self-Sacrifice"]["description"];
    allDescriptions["Approval-Seeking/Recognition-Seeking"] = this["Approval-Seeking/Recognition-Seeking"]["description"];
    allDescriptions["Negativity/Pessimism"] = this["Negativity/Pessimism"]["description"];
    allDescriptions["Emotional Inhibition"] = this["Emotional Inhibition"]["description"];
    allDescriptions["Unrelenting Standards/Hypercriticalness"] =
      this["Unrelenting Standards/Hypercriticalness"]["description"];
    allDescriptions["Entitlement/Grandiosity"] = this["Entitlement/Grandiosity"]["description"];
    allDescriptions["Insufficient Self-Control/Self-Discipline"] =
      this["Insufficient Self-Control/Self-Discipline"]["description"];
    return allDescriptions;
  },
};

module.exports = allTraps;
