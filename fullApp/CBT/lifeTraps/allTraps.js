const Abandonment= require('./Abandonment/Instability')
const ApprovalSeeking = require('./Approval-Seeking/Recognition-Seeking')
const Defectiveness= require('./Defectiveness/Shame')
const Dependence = require('./Dependence/Incompetence')


const allTraps={
    abandonment:Abandonment,
    ApprovalSeeking:ApprovalSeeking,
    Defectiveness:Defectiveness,
    Dependence:Dependence,
    getTrap:(trapName)=>{
        return this[trapName]
    }
}

module.exports = allTraps