let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Playlist'

let schema = new Schema({
    playListId: {
      type: String,       
    },
    playListName: {
        type: String,
    },
    
    
})

// let schema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   songs: [songDetails]
// })




  module.exports = mongoose.model(schemaName, schema)