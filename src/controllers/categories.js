const categoriesModule = require('../modules/category');
const Response = require('../core/response');

module.exports = {
    get: async(req, res) => {
        let response = Object.assign({}, Response);
        let data = categoriesModule.get();

        response.data = typeof(data) === Array?data:[];
        response.status = 1;
        response.text = `${response.data.length || 0} category(s) fetched`;
        res.json(response);
    }, 
    create: async(req, res) => {
        let response = Object.assign({}, Response);
        let data = categoriesModule.create(req.body);
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
        if(categoriesModule.updateById(req.params.id, req.body)) {
            response.status = 1;
            response.text = "Category updated";
        }
        res.json(response);
    },
    delete: async(req, res) => {
        let response = Object.assign({}, Response);
        if(categoriesModule.deleteById(req.params.id)) {
            response.status = 1;
            response.text = "Category deleted";
        }
        res.json(response);
    },
};