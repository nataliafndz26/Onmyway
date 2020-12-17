const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
//const { default: UserService } = require('../../client/src/service/user.service')

const Preferences = require('../models/preferences')
const User = require('../models/user')

const { checkId } = require('./../middlewares/middlewares') 



router.get('/preference/:id', checkId, (req, res) => {

    Preferences
        
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newPreferences/:id', checkId, (req, res) => {

    Preferences
        .create(req.body)
        .then(response => User.findByIdAndUpdate(req.params.id, { preferences: response._id }, {new: true}))
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editPreferences/:id', checkId, (req, res) => {

    Preferences
        .findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router