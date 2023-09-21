var express = require('express');
var router = express.Router();
const home_controller= require('../controllers/homeController')

router.get('/:schema', function(req,res,next){
    res.send(req.params.schema)
})

module.exports = router