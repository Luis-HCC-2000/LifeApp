const userModel = require('../models/userLoginModel')
const {body, validationResult} = require('express-validator')
const allTraps= require('../CBT/lifeTraps/allTraps')

exports.evaluation_get = async (req,res,next)=>{
    const info= allTraps.getTrap(req.params['trap'])
    res.render('evaluation', {info:info})
}