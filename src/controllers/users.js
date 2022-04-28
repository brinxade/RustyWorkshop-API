const UsersModule = require('../modules/users');
const Response = require('../core/response');

module.exports = {
    create: async (req,res)=>{
        let response = Object.assign({}, Response);
        let data = await UsersModule.create(req.body);
        if(data)
        {
            response.data = data;
            response.status = 1;
            response.text = "User Created Successfully";
        }
        else
            response.text = "User Creation Failed";
        res.json(response);
    },
    
}