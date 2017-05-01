var express=require('express');
var app=express();
var expressLayouts=require('express-ejs-layouts')
var port=process.env.PORT||8080;


app.use(require('./app/routes'));
app.use(express.static(__dirname+'/public'));
app.use(expressLayouts);

app.set('view engine','ejs');

app.listen(port,()=>{
  console.log(`Now listening to localhost:${port}`);
});
