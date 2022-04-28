import express from 'express';
import {Logger} from './core/logger.js';
import session from 'express-session';
import responseTime from 'response-time';
import cors from 'cors';

import './core/db.js';
import './core/commandline.js';

import router from '.core/router.js';

console.clear();

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