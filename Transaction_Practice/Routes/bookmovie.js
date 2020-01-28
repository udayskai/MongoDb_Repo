let express=require('express');
let router = express.Router();
let userd=require('../Database/userdb.js');
let ticketd=require('../Database/ticketdb.js');
let bookticket=require('../Database/bookmovie.js'); // check
let joi = require('@hapi/joi');
let fawn = require('fawn');



router.post('/bookticket2',async(req,res)=>{

   
    let dataUser= await userd.userModel.findById(req.body.userid)
    let dataMovie=await ticketd.movieModel.findById(req.body.ticketid)
    if(dataMovie.coins<=0){return res.send("please recharge your coins")} // to stop the futher process
        let data=new bookticket({
                 userid:{
                     name:dataUser.name,
                     email:dataUser.email
                 },
                 ticketid:{
                     movie:dataMovie.movie,
                     coins:dataMovie.coins,
                     number:dataMovie.number
                 }
        })

       
        fawn
        .Task()
        .save("Bookmodel",data)
        .update("movies",{_id:dataMovie._id},{$inc:{coins:-5}})
        .run(); 
       
       
        res.send(data)
    //  let oppo = await data.save();
    //    dataMovie.coins--;
    //    await dataMovie.save();
    //  res.send(oppo);
})


module.exports= router;

