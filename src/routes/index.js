'use strict'

const express = require('express')

const router = express.Router()

router.use('/v1/api', require('./access'))
// router.get('/', (req, res, next) => {
//     const strTest = 'Hello Worlds'
//     return res.status(200).json({
//         message: 'Here',
//         metaData: strTest.repeat(100000)
//     })
// })

module.exports = router