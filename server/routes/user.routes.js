const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


const User = require('../models/user')

router.get('/getuser/:user_id', (req, res) => {
        User
                .findById(req.params.user_id)
                .populate('favourites')
                .populate('applied')
                .populate('preferences')
                .then(data => res.status(200).json(data))
                .catch(err => res.status(500).json({ message: 'No se encontró información en la base de datos' }))
})

router.put('/edituser/:user_id', (req, res) => {
        User
                .findByIdAndUpdate(req.params.user_id, req.body, { new: true })
                .then(data => res.status(200).json(data))
                .catch(err => res.status(500).json({ message: 'No fue posible actualizar' }))
})

router.delete("/deleteuser/:user_id", (req, res, next) => {
        User
                .findByIdAndDelete(req.params.user_id)
                .then(data => res.status(204))
                .catch(err => res.status(500).json({ message: 'No fue posible eliminar la información seleccionada' }))
})



module.exports = router