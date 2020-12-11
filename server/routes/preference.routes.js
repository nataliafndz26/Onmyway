const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
//const { default: UserService } = require('../../client/src/service/user.service')

const Preferences = require('../models/preferences')
const User = require ('../models/user')


router.get('/preference/:preferences_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.preferences_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Preferences
        
        .findById(req.params.preferences_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newPreferences/:user_id', (req, res) => {

    Preferences
        .create(req.body)
        .then(response => User.findByIdAndUpdate(req.params.user_id, { preferences: response._id }, {new: true}))
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editPreferences/:preferences_id', (req, res) => {

    Preferences
        .findByIdAndUpdate(req.params.preferences_id, req.body, {new: true})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router