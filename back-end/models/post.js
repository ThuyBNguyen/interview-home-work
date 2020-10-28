const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    owner: String,
    title: String,
    content: String,
    created_at: {
        type: String,
        default: Date.now()
    },
    tags: [String]
})

module.exports = mongoose.model('Post', postSchema)