let mongoose = require('mongoose');
let userd=require('../Database/userdb.js');
let ticketd=require('../Database/ticketdb.js');


let BookSchema=mongoose.Schema({
     userid:{type:userd.userSchema,required:true},   
     ticketid:{type:ticketd.ticketSchema,required:true}
})

let BookModel=  mongoose.model("Bookmodel",BookSchema);

module.exports=BookModel;