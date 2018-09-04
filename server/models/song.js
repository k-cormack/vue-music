//Song Model

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Song'


let schema = new Schema({
    // trackId: {
    //     type: ObjectId,
    // },
    trackName: {
        type: String,
        // required: true
      },
    artistName: {
        type: String,
        //required: true
      },
    previewUrl: {
        type: String
    },
})

module.exports = mongoose.model(schemaName, schema)