let mongoose = require('mongoose');


let ticketSchema=mongoose.Schema({
    movie:{type:String,required:true},
    coins:{type:Number,required:true},
    number:{type:Number,required:true}
})


let movieModel = mongoose.model('movies',ticketSchema);


module.exports={movieModel,ticketSchema};