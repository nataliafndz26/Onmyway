const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Comment = require('../models/comments')
const Job = require('../models/jobs')


router.post('/newcomment/:id', (req, res) => {

    
    Comment
        .create(req.body)
        .then(response => Job.findByIdAndUpdate(req.params.id, { $push: { comments: response._id } }, { new: true }).populate('comments'))
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router