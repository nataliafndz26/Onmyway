const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            default: 'traveller',
            required: true
        },
        name: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        },
        image: {
            type: String,
            default: 'https://res.cloudinary.com/nataliafndz26/image/upload/v1607942500/Onmyway/user-alt-512_metot9.webp'
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