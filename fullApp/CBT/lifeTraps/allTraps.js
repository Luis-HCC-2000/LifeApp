const Abandonment= require('./Abandonment')
const ApprovalSeeking = require('./ApprovalSeeking')
const Defectiveness= require('./Defectiveness')
const Dependence = require('./Dependence')


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