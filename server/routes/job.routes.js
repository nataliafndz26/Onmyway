const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Job = require('../models/jobs')
const Preferences = require('../models/preferences')


router.get('/allJobs', (req, res) => {

    Job
        .find()
        .populate('preferences')
        .populate('user')
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getOneJob/:job_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.job_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Job
        .findById(req.params.job_id)
        .populate('preferences')
        .populate('user')
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
})


router.post('/newJob', (req, res) => {

    const { name, location, accommodation, timetable, benefits, image, description, preferences, user } = req.body
    
    Preferences
        .create(preferences)
        .then(response => Job.create({name, location, accommodation, timetable, benefits, image, description, preferences: response._id, user}))
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editJob/:job_id', (req, res) => {

    console.log (req.body.preferences)

    const {name, location, accommodation, timetable, benefits, image, description, preferences} = req.body

    Job
        .findByIdAndUpdate(req.params.job_id, {name, location, accommodation, timetable, benefits, image, description}, {new:true})
        .then(response => Preferences.findByIdAndUpdate(response.preferences, preferences, {new:true}))
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteJob/:job_id', (req, res) => {
   
    Job
        .findByIdAndDelete(req.params.job_id)
        .then(response => res.status(204).json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router