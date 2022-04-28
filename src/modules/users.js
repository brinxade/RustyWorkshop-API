const Users = require("../models/user");

module.exports = {
    get: async()=>{
        return await Users.find({});
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
        try {
            await Users.findByIdAndUpdate(id,data);
        }
        catch(e){
            return false;
        }
        return true;
    },
    deleteById: async(id)=>{
        try {
            await Users.findByIdAndDelete(id);
        }
        catch(e){
            return false;
        }
        return true;
    }
}