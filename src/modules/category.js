const { Logger } = require('../core/logger');
const Categories = require('../models/category');

const logger = new Logger("[CATEGORY MOD]");

module.exports = {
    get: async() => {
        return await Categories.find({});
    },
    create: async(data) => {
        // return false on category found with same name, or category failed to create
        // returns doc on success
        if(await Categories.findOne({name: data.name})) {
            return false;
        }

        try {
            const doc = new Categories(data);
            await doc.save();
            return doc;
        } catch(e) {
            logger.warn("Failed to create category");
            console.log(e);
            return false;
        }
    },
    updateById: async(id, data) => {
        try {
            await Categories.findByIdAndUpdate(id, data);
            return true;
        } catch(e) {
            logger.warn("Failed to update category", e);
            return false;
        }
    },
    deleteById: async(id) => {
        try {
            return await Categories.findByIdAndDelete(id);
        } catch(e) {
            logger.warn("Failed to delete category", e);
            return false;
        }
    }
};