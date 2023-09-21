var express = require('express');
var router = express.Router();
const trapEvaluation_controller= require('../controllers/evaluationController')
router.get('/:schema', trapEvaluation_controller.evaluation_get )

module.exports = router