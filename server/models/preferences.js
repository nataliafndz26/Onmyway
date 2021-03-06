const mongoose = require('mongoose')
const Schema = mongoose.Schema

const preferencesSchema = new Schema({

    interests: {
        type: [String],
        enum: ['Sabbatical Year', 'Professional Development', 'Self-knowledge', 'Travel Alone', 'Couple Travel', 'Digital Nomadism', 'Learn Languages', 'Backpacker', 'Try New Foods', 'Spiritual Development']
    },
    continent: {
        type: String, 
        enum: ['Europe', 'South America', 'Central America', 'North America', 'Asia', 'Africa', 'Oceania']
    },
    skills: {
        type: [String],
        enum: ['Working with guests', 'Cleaning', 'Teaching', 'Cooking', 'Community work', 'Working with animals', 'IT', 'Ecological activities'],
    },
    time: {
        type: String,
        enum: ['0-6 months', '6 months-1 year', 'More than 1 year']
    }, 

}, {
    timestamps: true
})

const Preferences = mongoose.model('Preferences', preferencesSchema)

module.exports = Preferences