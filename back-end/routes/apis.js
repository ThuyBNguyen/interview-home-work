const express = require('express')
const Post = require('../models/post')
const router = express.Router()

router.get('/', (req, res) => {
    Post.find({})
        .then((data) => {
            console.log('Data', data);
            res.json(data)
        })
        .catch((error) => {
            console.log('error', error)
        })
});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body

    const newPost = new Post(data)

    newPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Internet server errors!!!!!'})
            return
        }
        return res.json({
            msg: 'Data has been saved!'
        })
    })
})

router.get('/name', (req, res) => {
    const data = {
        username: 'Aure',
        age: 31
    }
    res.json(data)
});

module.exports = router