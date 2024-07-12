const express = require('express');
const apiChecker = require('./middlewares/apiChecker')
const signUpRoute = require('./routes/signUpRoutes')
const logInRoute = require('./routes/logInRoutes')

const app = express();

app.use(express.json());
app.use('/', apiChecker, signUpRoute);
app.use('/', apiChecker, logInRoute);

module.exports = app;
