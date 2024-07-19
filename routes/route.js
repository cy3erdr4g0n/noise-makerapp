const router = require('express').Router()
const controller = require('../controllers/controller')


router.get('/',controller.dashboard)
router.post('/',controller.registerUser)



module.exports = router