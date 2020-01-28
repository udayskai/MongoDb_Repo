// const router=require('express').Router()
const express=require('express');
const router=express.Router();
const usersDb=require('../auth_Db/userDb.js');
const Joi = require('@hapi/joi')


router.post('/postUser',async(req,res)=>{
     let {error}=errorValidation(req.body);

     if(error)(res.status(403).res.send(error[0].message));
     let Data= new usersDb.userModel({
         FirstName:req.body.FirstName,
         LastName:req.body.LastName,
         Age:req.body.Age,
         UserLogin:{
             UserName:req.body.UserLogin.UserName,
             Password:req.body.UserLogin.Password
         }
     })
     let item = await Data.save();
     res.send({resp:item})

})



let errorValidation = (error)=>{
   let Schema = Joi.object({
       FirstName:Joi.string().required(),
       LastName:Joi.string().required(),
       Age:Joi.string().required(),
       UserLogin:{
           UserName:Joi.string().required(),
           Password:Joi.string().required()
       }
   })

   return Schema.validate(error);
}


module.exports =router;