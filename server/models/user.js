const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        name: {
            type: String,
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
        },
        image: {
            type: String
        },
        description: {
            type: String
        },
        role: {
            type: String,
            enum: ['HOST', 'USER'],
            default: 'USER',
            required: true,
        },
        preferences: {
            type: Schema.Types.ObjectId,
            ref: 'Preferences'
        },
        favourites: [{
            type: Schema.Types.ObjectId,
            ref: 'Jobs'
        }],
        applied: [{
            type: Schema.Types.ObjectId,
            ref: 'Jobs'
        }],
        
    }, {
    timestamps: true
}
);

const User = mongoose.model('User', userSchema)

module.exports = User