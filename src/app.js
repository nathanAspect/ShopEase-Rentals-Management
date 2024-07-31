const express = require('express')
const cookieParser = require('cookie-parser')
const { apiChecker, authorization } = require('./middlewares/')
const {signupRoutes, logInRoutes, userRoutes } = require('./routes/')

const app = express();

app.use(express.json());
app.use(cookieParser())

app.use(apiChecker);
app.use('/signup', signupRoutes);
app.use('/login', logInRoutes);


app.use('/user', authorization, userRoutes)
module.exports = app;
