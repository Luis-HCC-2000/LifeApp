var express = require('express');
var router = express.Router();
const home_controller= require('../controllers/homeController')

router.get('/', home_controller.evaluation_get)

module.exports = router