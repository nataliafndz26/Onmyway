const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Jobs = require('../models/jobs')
const User = require('../models/user')

router.post('/favourites/:favourites_id', (req, res) => {
     User
        .findByIdAndUpdate(user._id, { $push: { favourites: req.params.favourites_id } }, { new: true })
        .then(response => res.json(response))       
        .catch(err => res.status(500).json(err))
})

module.exports = router