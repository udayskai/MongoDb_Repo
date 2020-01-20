const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/As1',{ useNewUrlParser: true , useUnifiedTopology: true } )
                 .then(()=>(console.log(" connect to DB ture")))
                 .catch((error)=>(console.log(error.message)));

 
// let DataSchema = new mongoose.Schema(
//                   {name:{type:String,min:4,max:14,required:true},
//                   password:{type:Number,required:true} 
//                   }); // 


// let dataModel = mongoose.model("ProData",DataSchema);
// // tell the Db which data to save and how ?
//  // Model need 3 parameter    1st: Name (name mostly as a colleaction name) , 2: Schema , 3:colleaction (if not set in db then name writen will consider as Name given in mongoose)                                        




//  // to insert Or create data
//  async function createData(){
           
//      let userData=new dataModel(
//          {
//           name:"udaysingh",
//           password:"1234569"
//          })
//          //need object becouse it give data to ObjectSchema which we have created
//          let data= await userData.save();
//          console.log(data);
//  }
// //  createData();


//  // fetching Db Data

//  async function dataFromDb(){

//     let dataDb=await dataModel.find()
//       console.log(dataDb);
// }
// dataFromDb();




//case 1

// let dataDb=await dataModel.find()
// .find({"tags":{$in:[["node","backend"],["aspnet","backend"],["express","backend"]]}})
// .sort("tags")
// .select(" tags -_id  author")

// console.log(dataDb);

let dataModel = mongoose.model("task1",{},"task1");



 // fetching Db Data

 async function dataFromDb(){
//case2
    let dataDb=await dataModel.find()
                         .find()
                         .sort("-price")
                         .select(" author -_id")
                         
                        
      console.log(dataDb);
}
dataFromDb();   