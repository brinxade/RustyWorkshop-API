const Categories = require('../models/category');

module.exports = {
    get: async() => {
        return await Categories.find({});
    },
    create: async(data) => {
        // return false on category found with same name, or category failed to create
        // returns doc on success
        if(await Categories.find({name: data.name})) {
            return false;
        }

        const doc = new Categories(data);
        await doc.save();
        return doc;
    },
    deleteById: async(id) => {
        await Categories.findByIdAndDelete(id);
    }
};