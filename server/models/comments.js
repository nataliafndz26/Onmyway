const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

const Comment = mongoose.model('Comment', commentsSchema)
module.exports = Comment