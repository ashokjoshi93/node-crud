const Event=require('../models/event');

module.exports={

  showEvents:(req,res)=>{
    var events=[
      {name:'basketball',slug:'basketball',description:'Throwing into basket.'},
      {name:'swimming',slug:'swimming',description:'Micheal Phelps vs Ian Thorpe.'},
      {name:'weightlifting',slug:'weightlifting',description:'Lifting up really heavy things.'}
    ];
    res.render('pages/events',{events:events});
  }

/*  showSingle:(req,res)=>{
     var event={name:'basketball',slug:'basketball',description:'Throwing into basket.'};
     res.render('pages/single',{event:event});
   }
*/
}
