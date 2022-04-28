const Categories = require('../models/category');

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

        const doc = new Categories(data);
        await doc.save();
        return doc;
    },
    updateById: async(id, data) => {
        try {
            await Categories.findByIdAndUpdate(id, data);
            return true;
        } catch(e) {
            return false;
        }
    },
    deleteById: async(id) => {
        try {
            return await Categories.findByIdAndDelete(id);
        } catch(e) {
            return false;
        }
    }
};