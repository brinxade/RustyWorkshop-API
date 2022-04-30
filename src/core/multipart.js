const path = require('path');
const multer = require('multer');

const serverStorage = multer.diskStorage({ 
    destination: process.env.STORAGE_DIR_SERVER,
    filename: function ( req, file, cb ) {
        let ext = path.extname(file.originalname);
        cb(null, file.originalname + '-' + Date.now() + ext);
    }
});

const clientStorage = multer.diskStorage({ 
    destination: process.env.STORAGE_DIR_CLIENT,
    filename: function ( req, file, cb ) {
        let ext = path.extname(file.originalname);
        cb(null, file.originalname + '-' + Date.now() + ext);
    }
});

module.exports = {
    serverStorage, clientStorage
};