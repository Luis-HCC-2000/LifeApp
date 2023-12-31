const userModel = require('../models/userLoginModel')
const {body, validationResult} = require('express-validator')
const allTraps= require('../CBT/allTraps')
const isAuthenticated= require("./authController")

exports.evaluation_get = async (req,res,next)=>{
    let client= isAuthenticated(req,res,next)
    let ans="not found"
    if (client){
        let user = await userModel.findOne({email:client})
        if (user.lifeTrapsAssessments && user.lifeTrapsAssessments.length> 0){
            let sortedSchemas= user.getSortedSchemas 
            let descriptions=allTraps.getDescriptions()
            //need to add a way to visualize if the assessment was answered specific or not
            let feelings =user.getListOfFeelings
                res.render('home', {sortedSchemas:sortedSchemas, feelings: feelings, descriptions:descriptions})
            }
            else{
            // should do this 
            // res.send('user hasnt completed their trapAssessments')
            res.redirect("/trapAssessment")
        }
    }else{
        res.send(ans)
    }
}