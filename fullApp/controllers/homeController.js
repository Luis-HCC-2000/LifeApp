const userModel = require('../models/userLoginModel')
const {body, validationResult} = require('express-validator')
const allTraps= require('../CBT/lifeTraps/allTraps')
const isAuthenticated= require("./authController")

exports.evaluation_get = async (req,res,next)=>{
    let client= isAuthenticated(req,res,next)
    let ans="not found"
    if (client){
        let user = await userModel.findOne({email:client})
        if (user.lifeTrapsAssessments && user.lifeTrapsAssessments.length> 0){
            console.log(user.lifeTrapsAssessments)
            let lifeTrapsAssesment= user.getLastFirstAssessment
            let specificAsessments= user.getSpecificLastAssessments
            if (specificAsessments.length>0){
                let sortedSchemas={
                    
                }
            }else{
                let answer=lifeTrapsAssesment.getSumOfAllSchemas
                let sortedSchemas=lifeTrapsAssesment.sortedSchemasWithUrl
                // res.render('home', {lifeTrapsAssesment: lifeTrapsAssesment})
                res.render('home', {sortedSchemas:sortedSchemas})
            }
            
        }else{
            // should do this 
            // res.send('user hasnt completed their trapAssessments')
            res.redirect("/trapAssessment")
        }
    }else{
        res.send(ans)
    }
}