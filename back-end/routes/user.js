const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post("/signin", (req, res) => {
    console.log("signin", req.body)
})
router.post("/signup", (req, res) => {
    console.log("sigup", req.body)
})

module.exports = router