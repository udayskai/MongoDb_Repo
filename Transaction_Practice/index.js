let mongoose=require('mongoose');
let express=require('express');
let app =express();
let api = require('./Routes/userRt.js');
let ticket=require('./Routes/ticketRt.js');
let bookticket = require('./Routes/bookmovie.js')
let port = process.env.PORT || 4000;
let fawn=require('fawn');

fawn.init(mongoose);
app.use(express.json());

mongoose.connect("mongodb://localhost/PracticeTRANSITION",{useNewUrlParser:true, useUnifiedTopology:true })
                                  .then(()=>(console.log("Db Running --TRUE")))
                                  .catch((error)=>(console.log(error.message)))


app.use('/index',api);
app.use('/index',ticket);
app.use('/index',bookticket);

app.listen(port,()=>{console.log("port is Running -- TRUE")});




// Output
//{
    //     "_id": "5e2a09be1e1d111b788d2108",
    //     "userid": {
    //         "_id": "5e2a09be1e1d111b788d2109",
    //         "name": "udaysingh",
    //         "email": "udayskai@gmail.com"
    //     },
    //     "ticketid": {
    //         "_id": "5e2a09be1e1d111b788d210a",
    //         "movie": "the lion king",
    //         "coins": 9,
    //         "number": 5
    //     },
    //     "__v": 0
    // }