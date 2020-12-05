const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    accommodation: {
        type: String,
        required: true,
    }, 
    timetable: {
        type: String
    },
    benefits: {
        type: [String],
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Health insurance', 'Shared bedroom', 'Individual bedroom', 'Some extra money', 'Laundry']
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

const Job = mongoose.model('Jobs', jobsSchema)
module.exports = Job