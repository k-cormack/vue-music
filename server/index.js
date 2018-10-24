let express = require('express')
let bp = require('body-parser')
let cors = require('cors')
require('./db/db-config')
var port = process.env.PORT || 3000

let server = express()

server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))
server.use(cors())
server.use(express.static(__dirname + '/../../client/docs'))


//Routes
let songsRoute = require('./routes/songs')


server.use('/api/songs', songsRoute)


//Error Handlers
server.use('/api/*', (error, req, res, next) => {
    res.send(error)
})

server.use('*', (req, res, next) => {
    res.status(404).send('<h1>No Page Found!  (kic)</h1>')
})

server.listen(port, () => {
    console.log('Server up and running on port ', port, ' (kic)')
})