const app = require('./src/app')
const {app: {port}} = require('./src/configs/init_config_app')
const PORT = process.env.PORT || 3057

const server = app.listen( port, () => {
    console.log(`WSV eCommerce start with ${port}`)
})

// process.on('SIGINT', () => {
//     server.close( () => console.log('Exit Server Express'))
// })