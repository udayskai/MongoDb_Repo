let mongoose =require('mongoose');


let userSchema =new mongoose.Schema({
     FirstName:{type:String, required:true,min:4,max:255},
     LastName:{type:String,min:4,max:255,required:true},
     Age:{type:String,min:2,required:true,max:4},
     UserLogin:{
         UserName:{type:String,required:true,min:4,max:255},
         Password:{type:String,min:4,max:1000}
     }
     
})


const userModel = mongoose.model("Users_DataBase",userSchema);

module.exports= { userModel,userSchema };

