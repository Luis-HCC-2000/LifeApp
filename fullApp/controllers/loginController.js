const userModel= require("../models/userLoginModel")
const asyncHandler= require('express-async-handler')
const router = require("../routes/login")
const { body, validationResult } = require("express-validator")

exports.login_get =(req,res,next)=>{
    res.render('login')
}

exports.login_post=[
    body('email').trim().escape(),
    body('password').escape(),
    asyncHandler(async (req,res,next)=>{
        const {email, password}= req.body
        try {
            const user = await Info.findOne({ email:email });
            if (!user) {
                return res.render('login', {
                    errors:'User not found'
                })
            }
        
            if (user.password !== password) {
                return res.render('login', {
                    errors:'Invalid password'
                })
            }
        
            // At this point, the email and password match
            let session= req.session
            session.userid= user._id
            res.redirect('/home')
          } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Server error' });
          }
    })
]
