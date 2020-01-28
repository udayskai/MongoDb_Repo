let mongoose =require('mongoose');
const Joi = require('@hapi/joi')

let userSchema =new mongoose.Schema({
     FirstName:{type:String, required:true,min:2,max:255},
     LastName:{type:String,min:4,max:255,required:true},
     Age:{type:String,min:2,required:true,max:4},
     UserLogin:{
         UserName:{type:String,required:true,min:4,max:255},
         Password:{type:String,min:4,max:1000}
     }
     
})


let errorValidation = (error)=>{
    let Schema = Joi.object({
            FirstName:Joi.string().required().min(4),
            LastName:Joi.string().required(),
            Age:Joi.string().required(),
            UserLogin:{
              UserName:Joi.string().required(),
              Password:Joi.string().required()
        }
    })
 
    return Schema.validate(error);
 }


const userModel = mongoose.model("Users_DataBase",userSchema);

module.exports= { userModel,userSchema ,errorValidation};

