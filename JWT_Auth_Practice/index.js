const express= require('express');
const mongoose=require('mongoose');
const UserRouter=require('./route_Auth/userRoute.js')
let UserAuth =require('./route_Auth/login.js')


const port = process.env.Port || 4000; //to way to start the application
const app = express();       //to create app to use express property
app.use(express.json()); //app.use is middleware method  to allow to use json in express this in  build method


mongoose
         .connect("mongodb://localhost/kai",{ useNewUrlParser: true , useUnifiedTopology: true })//1st -mongodb ,2nd-://localhost ,3rd--Db Name if not set make automatically
                 .then(()=>{console.log("working Db")}) //to handle promises
                 .catch((err)=>console.log(err.message));//to handle reject 


app.use('/api',UserRouter)
app.use('/apiAuth',UserAuth)



app.listen(port,()=>{console.log("server  4000 is running write some good code")});// start the server 