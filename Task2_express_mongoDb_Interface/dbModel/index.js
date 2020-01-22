
let mongoose=require('mongoose');


let GenreSchema = new mongoose.Schema(
    {genre:{type:String,min:2,max:10,required:true}})

let  MovieSchema = new mongoose.Schema({
     name:{type:String,min:3,max:100,required:true},
     actor:{type:String,min:3,max:100,required:true},
     price:{type:Number,required:true},
     genreId:{type:mongoose.Schema.Types.ObjectId,ref:"genre"}
      
})


let GenreModel = mongoose.model("genre",GenreSchema);
let MovieModel = mongoose.model("movie",MovieSchema);


module.exports={MovieModel,GenreModel};
