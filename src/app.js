require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const compression = require('compression')
const { default: helmet} = require('helmet');
const app = express()

// init middlewares
app.use(morgan('combined'))
app.use(helmet())
app.use(compression())

// init db
require('./dbs/init.mongodb')


// init routes
app.get('/', (req, res, next) => {
    const strTest = 'Hello Worlds'
    return res.status(200).json({
        message: 'Here',
        metaData: strTest.repeat(100000)
    })
})

// handle Errors

module.exports = app