const Abandonment= require('./Abandonment/Instability')
const ApprovalSeeking = require('./Approval-Seeking/Recognition-Seeking')
const Defectiveness= require('./Defectiveness/Shame')
const Dependence = require('./Dependence/Incompetence')
const Subjugation= require('./Subjugation')
const enmeshment = require('./Enmeshment/Undeveloped Self')
const entitlement= require('./Entitlement/Grandiosity')
const InsufficientSelfControl = require('./Insufficient Self-Control/Self-Discipline')
const mistrust= require('./Mistrust/Abuse')
const negativity= require('./Negativity/Pessimism')
const socialIsolation= require('./Social Isolation/Alienation')
const unrelentingStandards= require('./Unrelenting Standards/Hypercriticalness')
const EmotionalDeprivation=require('./Emotional Deprivation')
const emotionalInhibition=require('./Emotional Inhibition')
const failureToAchieve=require('./Failure to Achieve')
const selfSacrifice= require('./Self-Sacrifice')
const VulnerabilitySchema= require('./Vulnerability to Harm or Illness')


const allTraps={
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
    "Other-Directedness": 'falta esto',
    }

module.exports = allTraps