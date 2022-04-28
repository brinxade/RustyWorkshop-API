const Users = require("../models/user");

module.exports = {
    get: async()=>{
        return await Users.find({}).lean();
    },
    create: async(data)=>{
        if(await Users.findOne({email:data.email}))
        {
            return false;
        }
        else{
            let doc = await new Users(data);
            await doc.save();
            return doc;
        }
    },
    updateById: async(id,data)=>{
    },
    deleteById: async(id,data)=>{

    }
}