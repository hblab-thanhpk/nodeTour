const dev = {
    app: {
        port: process.env.PORT
    },
    db: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT,
        name: process.env.MONGO_DBNAME
    }
}

const prod = {
    app: {
        port: 3056
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'dbProd'
    }
}

const config = {dev, prod}
const env = process.env.NODE_ENV || dev

module.exports = config[env]