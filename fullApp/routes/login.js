const express= require ('express')
const router= express.Router()
const login_controller= require('../controllers/loginController')

router.get("/login", login_controller.login_get)
router.post('/login', login_controller.login_post)
router.get('/signup', login_controller.signup_get)
router.post('/signUp', login_controller.signup_post)

module.exports= router