'use strict'

const mongoose = require('mongoose');
const {db: {host, name, port}} = require('../configs/init_config_app')
const connectStr = `mongodb://${host}:${port}/${name}`

class Database {

    constructor() {
        this.connect()
    }

    // connect
    connect(type = 'mongodb') {
        if(1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', {color:true})
        }
        mongoose.connect(connectStr).then(_ => console.log('Connected MongoDB Success'))
        .catch(err => console.log('Connect Error'))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongoDb = Database.getInstance()
module.export = instanceMongoDb