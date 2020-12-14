const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Job = require('../models/jobs')
const Preferences = require('../models/preferences')
const User = require('../models/user')

const checkId  = require('./../middlewares/middlewares') 


router.get('/allJobs', (req, res) => {

    Job
        .find({}, { name: 1, image: 1, location: 1, accommodation: 1, _id: 1 })
        .populate('preferences')
        .populate('user')
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getOneJob/:id', checkId, (req, res) => {

    Job
        .findById(req.params.id)
        .populate('preferences')
        .populate('user')
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getPostedJob/:id', checkId, (req, res) => { 

    User
        .findById(req.params.id)
        .then (response => Job.find({ user: response._id }))
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

router.put('/editJob/:id', (req, res) => {

    console.log (req.body.preferences)

    const {name, location, accommodation, timetable, benefits, image, description, preferences} = req.body

    Job
        .findByIdAndUpdate(req.params.id, {name, location, accommodation, timetable, benefits, image, description}, {new:true})
        .then(response => Preferences.findByIdAndUpdate(response.preferences, preferences, {new:true}))
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteJob/:id', (req, res) => {
   
    Job
        .findByIdAndDelete(req.params.id)
        .then(response => res.status(204).json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router