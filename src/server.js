const express = require('express');
const Logger = require('./core/logger').Logger;
const session = require('express-session');
const responseTime = require('response-time');
const cors = require('cors');
const dotenv = require('dotenv');

console.clear();
dotenv.config();
const logger = new Logger();

require('./core/db');
require('./core/commandline');

const router = require('./core/router');


const app = express();
const port = process.env.PORT || process.env.DEFAULT_PORT;

// Middlewares
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Logging
app.use(responseTime((req, res, time) => {
    Logger.LogRequest(req, res, time);
}));

// Routing
app.use('/', router);

app.listen(port, ()=>{
    logger.info(`Server running at http://localhost:${port}/`);
});