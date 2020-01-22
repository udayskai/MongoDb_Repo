let express = require('express');
let Data=require('../dbModel/index.js');
let router = express.Router();


//post genre
router.post("/postgenre", async(req,res)=>{
    
    let newData = new Data.GenreModel({
        genre:req.body.genre  })
     let data = await newData.save();
     res.send({message:"genre is added",d: await Data.GenreModel.find()})
})


//post movie with genre Id
router.post("/postmovie",async(req,res)=>{
    let Movie =  new Data.MovieModel({
        name:req.body.name,
        actor:req.body.actor,
        price:req.body.price,
        genreId:req.body.genreId,
    })
    let dataMovie= await Movie.save();
    res.send({movie:await Data.MovieModel.find()})
})


//get genre
router.get("/getgenre",async(req,res)=>{
    let Output = await Data.GenreModel.find()
    res.send(Output)
})


//get movie
router.get('/getmovie',async(req,res)=>{
    let Output=await Data.MovieModel.find().populate("genreId")
    res.send(Output);
})


//get by id
router.get('/getmovie/:id',async(req,res)=>{
    let Output=await Data.MovieModel.findById(req.params.id).populate("genreId")
    res.send(Output);
})


// function Movievalidation(error){
//     let schema = joy.object({
//     name:joy.String().Required(),
//})

// }

  
module.exports=router;