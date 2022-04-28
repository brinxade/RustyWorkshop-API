import {validationResult} from "express-validator";
import {Logger} from "../core/logger.js";

let logger = new Logger("Request Validation Failed -");

export default (req, res, next) => {
        const validation = validationResult(req);
        const errMessages = [];
        validation.errors.forEach((error)=>{errMessages.push(error.msg)});

        if(validation.isEmpty()) {
            next();
        }
        else { 
            
            logger.warn(errMessages[0]);
            res.send(errMessages);
        }
};