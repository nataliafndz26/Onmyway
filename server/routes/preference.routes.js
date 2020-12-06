const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Preferences = require('../models/preferences')

router.post('/newPreferences', (req, res) => {

    Preferences
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editPreferences/:preferences_id', (req, res) => {

    Preferences
        .findByIdAndUpdate(req.params.preferences_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router