var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var eventSchema=new Schema({
  name:String,
slug{
type:string,
unique:true
},
description:String
});

eventSchema.pre('save',function(next){
  this.slug=slugify(this.name);
  next();
});

var eventModel=mongoose.model('Event',eventSchema);

module.exports=eventModel;

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
