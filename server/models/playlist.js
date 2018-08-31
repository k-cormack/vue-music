let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Playlist'

let songDetails = new Schema({
    title: {
      type: String,
      // required: true
    },
    albumArt: {
      type: Image,
      // src: 'artworkUrl60.replace(/60x60/g, "250x250")'
    },
    artist: {
        type: String,
        //required: true
    },
    collection: {
        type: String,
    },
    price: {
        type: Number,
    },
    preview: {
        type: URL
    }
})

let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  songs: [songDetails]
})




  module.exports = mongoose.model(schemaName, schema)