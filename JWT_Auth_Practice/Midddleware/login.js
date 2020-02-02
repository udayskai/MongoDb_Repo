
let jwt = require('jsonwebtoken');
let config =require('config');

function UserAuth(req,res,next){
     let token =req.header("x-token-name")
     if(!token){ res.status(403).send({message:"please login with token"})}
    try{
 
  
     let decoder= jwt.verify(token,config.get("apitoken"));
     console.log(decoder)
     //{ _id: '5e372a0c75fdd12990186c01', iat: 1580673886 } output
     
     next()
    }
    catch(ex){
         return res.send("acsess denied chu")
    }
}  

 
module.exports=UserAuth;