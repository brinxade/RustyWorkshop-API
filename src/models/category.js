const mongoose = require('mongoose');
const modelName = 'Categories';

module.exports = mongoose.model(modelName, new mongoose.Schema ({
    name: {type: String, required: true},
    parent: {type: mongoose.Types.ObjectId, ref: 'Categories', default: null}
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}), modelName);