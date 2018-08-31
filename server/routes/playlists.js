let router = require('express').Router()
let Playlists = require('../models/playlist')

//get all the playlists using the given search parameters
router.get('/', (req, res, next) => {
    Playlists.find({})
    .then(playlists => {
        return res.send(playlists)
    })
    .catch(err => {
        return next(err)
    })
})

//get only one playlist by Id
router.get('/:id', (req, res, next) => {
    Playlists.findById(req.params.id)
    .then(playlist => res.send(playlist))
    .catch(next)
})

//Create Playlist
router.post('/', (req, res, next) => {
    Playlists.create(req.body)
    .then(playlist => res.send(playlist))
    .catch(next)
})

//Edit a specific playlist
router.put('/:id', (req, res, next) => {
    Playlists.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
        message: 'Playlist successfully updated'
    }))
    .catch(next)
})

//Delete a specific playlist
router.delete('/:id', (req, res, next) => {
    Playlists.findByIdAndRemove(req.params.id)
    .then(() => ({
        message: 'Playlist successfully deleted'
    }))
    .catch(next)
})

module.exports = router