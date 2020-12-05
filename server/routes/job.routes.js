const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Job = require('../models/jobs')


router.get('/allJobs', (req, res) => {

    Job
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getOneJob/:job_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.job_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Job
        .findById(req.params.job_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newJob', (req, res) => {

    Job
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editJob/:job_id', (req, res) => {

    Job
        .findByIdAndUpdate(req.params.job_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteJob/:job_id', (req, res) => {
   
    Job
        .findByIdAndDelete(req.params.job_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router