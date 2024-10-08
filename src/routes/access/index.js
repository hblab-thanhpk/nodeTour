'use strict'

const express = require('express')
const AccessController = require('../../controllers/access/access.controller')
const router = express.Router()

router.post('/shop/signUp', AccessController.signUp)

module.exports = router