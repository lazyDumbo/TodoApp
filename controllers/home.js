const db=require("../config/mongoose");
const Todo=require("../models/Todo")
module.exports.home=function(req,res){
   var ans= Todo.find({},function(err,data){
       console.log(data);
       res.render("home",{"todos":data})
   });
}