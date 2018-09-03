//Song Model

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Song'


let schema = new Schema({
    songId: {
        type: ObjectId,
    },
    songTitle: {
        type: String,
        // required: true
      },
    songArtist: {
        type: String,
        //required: true
      },
    // preview: {
    //     type: URL
    // },
})

module.exports = mongoose.model(schemaName, schema)