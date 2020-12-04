const express = require('express')
const router = express.Router()
const SystemController = require('./controllers/SystemController')

  

router.get('/ping', SystemController.ping)
router.get('/users', SystemController.users)



module.exports = router