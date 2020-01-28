let userD=require('../Database/userdb.js');
let express=require('express');
let joi = require('@hapi/joi')
let router=express.Router();



router.post('/postuser',async(req,res)=>{
    let {error}=joiValidation(req.body);
     if(error){ return res.send("invalid data type")};
   
     let data= new userD.userModel({
        name:req.body.name,
        email:req.body.email
    })

     let oppo= await data.save();
      res.send(oppo);})

      router.get('/getuser',async(req,res)=>{
        let data = await userD.userModel.find();
         res.send({s:data})
     })
     



function joiValidation(error){
    let Schema= joi.object({
        name:joi.string().required(),
        email:joi.string().email().required()
    })

    return Schema.validate(error);

}


module.exports=router; 