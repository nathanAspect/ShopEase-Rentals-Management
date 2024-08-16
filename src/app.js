const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { apiChecker, authorization } = require('./middlewares/')
const {signupRoutes, logInRoutes, userRoutes, folderRoutes, shopRoutes } = require('./routes/')

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(apiChecker);
app.use('/signup', signupRoutes);
app.use('/login', logInRoutes);

app.use(authorization);
app.use('/user', userRoutes);
app.use('/folder', folderRoutes);
app.use('/shop', shopRoutes);


module.exports = app;
