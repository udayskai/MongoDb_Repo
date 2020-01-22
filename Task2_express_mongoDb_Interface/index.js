let express = require('express');
let app = express();
let user = require('./routes/index.js')
let mongoose = require('mongoose');
let port = process.env.PORT || 4000;

app.use(express.json());


mongoose.connect('mongodb://localhost/Tasks',{useNewUrlParser:true, useUnifiedTopology:true }  )
                .then(()=>(console.log(`db in connected`)))
                .catch((error)=>console.log(error.message));

      



app.listen(port,()=>(console.log(` working true ${port}`)));

app.use("/task",user)




 