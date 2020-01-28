// const router=require('express').Router()
const express=require('express');
const router=express.Router();
const usersDb=require('../auth_Db/userDb.js');
const bcrypt=require('bcrypt')


router.post('/postUser',async(req,res)=>{
  let UserName= await usersDb.userModel.findOne({"UserLogin.UserName":req.body.UserLogin.UserName})
     if (UserName){ return res.status(402),res.send({message:"already exits this UserName Please register new "})}
     
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

       let salt =await bcrypt.genSalt(10);
         Data.UserLogin.Password= await bcrypt.hash(Data.UserLogin.Password,salt)

      let item = await Data.save(); // save the data to the collations // hash before saving the password
      res.send({res:item}) // send res back to  receiver side
})


router.get('/getdata',async(req,res)=>{
           let data = await usersDb.userModel.find();
           res.send(data);
})

// router.get('/getdata/:id',async(req,res)=>{
//   let data = await usersDb.userModel.findById(req.params.id);
//   res.send(data);
// })


  


module.exports =router;