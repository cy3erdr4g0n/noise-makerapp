const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT
const ejs = require('ejs');
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const routes = require('./routes/route')
const mongoose = require('mongoose')

app.use('/user',routes);
const URI = process.env.MONGO_URL;

mongoose.connect(URI, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log("mondb not connected");
    console.log(error);
});



app.listen(PORT,(req,res)=>{
    console.log(`app is listen on PORT : ${PORT}`)
})