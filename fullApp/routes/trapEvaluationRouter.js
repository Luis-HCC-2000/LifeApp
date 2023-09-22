var express = require('express');
var router = express.Router();
const specificAssessment_controller= require('../controllers/specificAssessmentController')
router.get('/:schema', specificAssessment_controller.evaluation_get )
router.post('/', specificAssessment_controller.evaluation_post)

module.exports = router