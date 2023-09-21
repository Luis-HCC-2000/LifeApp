const userModel = require('../models/userLoginModel')
const {body, validationResult} = require('express-validator')
const allTraps= require('../CBT/lifeTraps/allTraps')
const isAuthenticated= require("./authController")

exports.evaluation_get = async (req,res,next)=>{
    const info= allTraps[req.params['schema']]
    let ans="user Not found"
    let client= isAuthenticated(req,res,next)
    if (client){
        let user = await userModel.findOne({email:client})
        if (user){
            res.send((info))
        }
    }else{
        res.send(ans)
    }
    
}