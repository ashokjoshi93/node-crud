require('dotenv').config();

var express=require('express');
var app=express();
var mongoose=require('mongoose');
var expressLayouts=require('express-ejs-layouts')
var port=process.env.PORT||8080;

app.use(express.static(__dirname+'/public'));
app.use(expressLayouts);
app.set('view engine','ejs');

mongoose.connect(process.env.DB_URI);
app.use(require('./app/routes'));

app.listen(port,()=>{
  console.log(`Now listening to localhost:${port}`);
});
