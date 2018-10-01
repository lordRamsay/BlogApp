//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//setting up server
const app = express();

//body-parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended : false} ));

//Database Connection
mongoose.connect('mongodb://localhost/BlogApp');
mongoose.connection.once('open',function(){
  console.log('Connected to database BlogApp :)');
}).on('error',(error)=>{
  console.log(":( Error : "+error);
});

//middleware for static files
app.use('/public',express.static(path.join(__dirname,'/public')));

//view Engine
app.set('view engine','ejs');

//get index
app.get('/',(req,res)=>{
  res.render('index',{user : "Himanshu"});
});

//listening port
app.listen(3000,function(){
  console.log('Listening on port 3000 :)');
});
