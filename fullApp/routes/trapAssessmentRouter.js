var express = require('express');
var router = express.Router();
const trapAssessment_controller= require('../controllers/trapAssessmentController')

router.get('/', trapAssessment_controller.evaluation_get)
router.post('/', trapAssessment_controller.evaluation_post)

module.exports = router