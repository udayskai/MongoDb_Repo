let express=require('express');
let router=express.Router();
let ticketDb=require('../Database/ticketdb.js');
let joi=require('@hapi/joi');



router.post("/postticket",async(req,res)=>{
    let {error}=joiValidation(req.body);
    if(error){ return res.status(404).res.send({message:"invalid data or data type"})}
     let data= new ticketDb.movieModel({
         movie:req.body.movie,
         coins:req.body.coins,
         number:req.body.number
        })

        let output=await data.save();
        res.send(output);
    
})

router.get('/getticket',async(req,res)=>{
   let data = await ticketDb.movieModel.find();
    res.send({s:data})
})





function joiValidation(error){
    let Schema=joi.object({
        movie:joi.string().required(),
        coins:joi.number().required(),
        number:joi.number().required()
    })

    return Schema.validate(error);
}


module.exports=router;
