const { Logger } = require('../core/logger');
const Categories = require('../models/category');
const fs = require('fs');

const logger = new Logger("[CATEGORY MOD]");

module.exports = {
    get: async() => {
        let data = await Categories.find({}).populate({
            path: 'parent',
            select: ['name']
        }).lean();

        data.forEach((dataItem, idx)=>{
            if(data[idx].parent!=null) {
                data[idx].parent = data[idx].parent.name;
            }
        });

        return data;
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
            let doc = await Categories.findByIdAndDelete(id);
            fs.exists(doc.featuredImg, (err1)=>{
                fs.unlink(doc.featuredImg, (err2)=>{
                    if(err2)
                    logger.err(err2);
                });
            });
            return doc;
        } catch(e) {
            logger.warn("Failed to delete category", e);
            return false;
        }
    }
};