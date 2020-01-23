let mongoose = require('mongoose');


let userSchema= mongoose.Schema({
    name:{type:String,min:4,max:100,required:true},
    email:{type:String,required:true}
})

let userModel = mongoose.model("userData",userSchema);


module.exports={userModel,userSchema};




// async function createUser(name ,email){
//     let data = new userModel({
//         name:name,
//         email:email
//     })
//     result=await data.save()
//     console.log(result);
// }
// createUser("uday","udayskai@gmail.com");
