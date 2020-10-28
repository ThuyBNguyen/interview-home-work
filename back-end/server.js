const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport')
const passportLocal = require('passport-local')
const cookieParser = require('cookieParser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const apiRouter = require('./routes/apis')
const userRouter = require('./routes/user')

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!')
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(session({
    secret: 'thisisthesecret',
    resave: true,
    saveUninitialized: true,
}))

app.use(cookieParser('thisisthesecret'))

//routes


//HTTP request logger
app.use(morgan('tiny'))
app.use('/api', apiRouter)
app.use('/', userRouter)


app.listen(PORT, console.log(`Server is up at ${PORT}`));