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
app.use(express.json())
app.use(express.urlencoded(
    extended: true
))

// init db
require('./dbs/init.mongodb')


// init routes
app.use('/', require('./routes'))

// handle Errors

module.exports = app