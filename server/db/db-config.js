let mongoose = require('mongoose')
const connectionString = 'mongodb://kcormack:Abcd6789@ds018538.mlab.com:18538/vue-music'
let connection = mongoose.connection

mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.log("DATABASE ERROR: ", err, "   kic")
})

connection.once('open', () => {
    console.log("Connected to Database (kic)")
})