// const router=require('express').Router()
const express=require('express');
const router=express.Router();
const usersDb=require('../auth_Db/userDb.js');



router.post('/postUser',async(req,res)=>{
     let {error}=usersDb.errorValidation(req.body);

     if(error){return res.send(error.details[0].message)};
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





  


module.exports =router;