let router = require('express').Router()
let Playlist = require('../models/playlist')
let Songs = require('../models/song')

//get all the songs using the given search parameters
router.get('/', (req, res, next) => {
    Songs.find({})
    .then(songs => {
        return res.send(songs)
    })
    .catch(err => {
        return next(err)
    })
})

//get only one song by Id
router.get('/:id', (req, res, next) => {
    Songs.findById(req.params.id)
    .then(song => {
        res.send(song)
    })
    .catch(next)
})

//Add song
router.post('', (req, res, next) => {
    Songs.create(req.body)
    .then(song => {
        res.send(song)
    })
    .catch(next)
})

//Edit a specific playlist
// router.put('/:id', (req, res, next) => {
//     Playlist.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => res.send({
//         message: 'Playlist successfully updated'
//     }))
//     .catch(next)
// })

//Delete a specific song
router.delete('/:id', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.id)
    .then(() => res.send({
        message: 'Song successfully deleted'
    }))
    .catch(next)
})

module.exports = router