const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/nominas");

const app = express();
const port =process.env.PORT || 9000;

//middleware
app.use(express.json());

app.use('/api',userRoutes);

//routes
app.get('/',(req,res)=>{
    res.send("Welcome API");
});
//mongo DB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("conectado a monoDB Atlas"))
    .catch((error)=> console.error(error));

app.listen(port, ()=> console.log('servidor levantado en el puerto',port));
 



