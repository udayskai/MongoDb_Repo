let express=require('express');
let Joi = require('@hapi/joi');
let userData=require('../auth_Db/userDb.js');
 const router=express.Router();
 const bcrypt=require('bcrypt')




router.post('/loginPost',async(req,res)=>{
    let {error}=errorValidation(req.body)
    if(error){return res.send(error.details[0].message)}

    let username= await userData.userModel.findOne({"UserLogin.UserName":req.body.UserLogin.UserName})
    if(!username){return res.send({message:"username is invalid"})}

     let password= await bcrypt.compare(req.body.UserLogin.Password,username.UserLogin.Password)
    // let password =await  userData.userModel.findOne({"UserLogin.Password":req.body.UserLogin.Password})
     if(!password){return res.send({message:"password is in valid"})}
   
     res.send("login Successful")
        
})

function errorValidation(error){
             let Schema =Joi.object({
              UserLogin:{
                  UserName:Joi.string().min(4).max(255).required(true),
                  Password:Joi.string().required().min(4)
              }  })
              return Schema.validate(error)
}

module.exports=router;



