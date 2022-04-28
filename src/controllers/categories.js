const categoriesModule = require('../modules/category');
const Response = require('../core/response');

module.exports = {
    get: async(req, res) => {
        let response = Object.assign({}, Response);
        let data = await categoriesModule.get();
        res.json(data);
    }, 
    create: async(req, res) => {
        let response = Object.assign({}, Response);
        let data = await categoriesModule.create(req.body);
        if(data) {
            response.data = data;
            response.status = 1;
            response.text = "Category created";
        } else {
            response.text = "Category with given name already exists";
        }
        res.json(response);
    },
    edit: async(req, res) => {
        let response = Object.assign({}, Response);
        if(await categoriesModule.updateById(req.params.id, req.body)) {
            response.status = 1;
            response.text = "Category updated";
        } else {
            response.text = "Failed to update category";
        }
        res.json(response);
    },
    delete: async(req, res) => {
        let response = Object.assign({}, Response);
        if(await categoriesModule.deleteById(req.params.id)) {
            response.status = 1;
            response.text = "Category deleted";
        } else {
            response.text = "Category with given id does not exist";
        }

        res.json(response);
    },
};