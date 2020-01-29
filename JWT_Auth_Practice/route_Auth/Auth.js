// external dependencies 
let jwt = require('jsonwebtoken');
let express=require('express');
let router = express.Router();
let Joi = require('@hapi/joi');
let bcrypt =require('bcrypt');
let config=require('config');



let userData= require('../auth_Db/userDb');


router.post('/authLogin',async(req,res)=>{
    let {error}= loginValidation(req.body);
    if(error){ return res.send(error.details[0].message)};

        let username= await userData.userModel.findOne({"UserLogin.UserName":req.body.UserLogin.UserName});
        if(!username){ return res.send("this user Name is invalid")}
        // let password=await userData.userModel.findOne({"UserLogin.Password":req.body.UserLogin.Password});
        // if(!password){return res.send("this in Invalid Password")}

            let hashPassword= await bcrypt.compare(req.body.UserLogin.Password,username.UserLogin.Password);//error 2 with login password data
            if(!hashPassword){ return res.send("hash password Does Not Match")}
                
                let token =username.tokenMaker();
                //  jwt.sign({_id:username._id},// config.get("apitoken"))
                

                res.send({d:"Login SuccessFull _________________",token:token})

})
 

 function loginValidation(error){ //error1
       let Schema = Joi.object({ UserLogin:{ UserName:Joi.string().required(),
                                  Password:Joi.string().required()}}) 
       return  Schema.validate(error);
 }


 module.exports=router;