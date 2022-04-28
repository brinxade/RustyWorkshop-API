const UsersModule = require('../modules/users');
const Response = require('../core/response');

module.exports = {
    get: async (req,res)=>
    {
        let response = Object.assign({}, Response)
        let data = await UsersModule.get();
        res.json(data);
    },
    create: async (req,res)=>{
        let response = Object.assign({}, Response);
        let data = await UsersModule.create(req.body);
        if(data){
            response.data = data;
            response.status = 1;
            response.text = "User Created Successfully";
        }else
            response.text = "User Creation Failed";
        res.json(response);
    },
    edit: async (req,res)=>
    {
        let response = Object.assign({}, Response)
        
        if(await UsersModule.updateById(req.params.id, req.body))
        {
            response.status = 1;
            response.text = "User Updated Successfully";
        }
        else{
            response.text = "User Update Failed";
        }
        res.json(response);

    },
    delete: async (req,res)=>
    {
        let response = Object.assign({}, Response);

        if(await UsersModule.deleteById(req.params.id))
        {
            response.status = 1;
            response.text = "User Deleted Successfully";
        }
        else{
            response.text = "User Deletion Failed"
        }
        res.json(response);
    }
    
}