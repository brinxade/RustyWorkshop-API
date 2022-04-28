const mongoose = require('mongoose');
const modelName = 'Users';

module.exports = mongoose.model(modelName, new mongoose.Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String},
    address: {type: String},
    isVerified: {type: Boolean,required: true},
    isActive: {type: Boolean,required: true},
    isAdmin: {type: Boolean,required: true},
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}), modelName);