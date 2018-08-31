let express = require('express')
let bp = require('body-parser')
let cors = require('cors')
require('./db/db-config')
let port = 3000
let server = express()
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))
server.use(cors)

let plRoutes = require('./routes/playlists')

server.use('/api/playlists', plRoutes)

server.use('/api/*', (error, req, res, next) => {
    res.send(error)
})

server.use('*', (req, res, next) => {
    res.status(404).send('<h1>No Page Found!  (kic)</h1>')
})