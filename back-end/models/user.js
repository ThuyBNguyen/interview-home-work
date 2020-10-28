const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
    password: {
        type: String,
        minlength: 7,
        trim: true, 
        required: true,
      },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: String,
    created_at: {
        type: String,
        default: Date.now()
    },
})


module.exports = mongoose.model('Post', userSchema)