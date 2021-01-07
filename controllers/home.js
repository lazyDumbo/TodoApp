const db=require("../config/mongoose");
const Todo=require("../models/Todo")
module.exports.home=function(req,res){
   var ans= Todo.find({},function(err,data){
       //console.log(data);
       var color={"personal":"#c6ff00",
                  "work":"#ff3d00",
                   "home":"#ffeb3b" }
       res.render("home",{"todos":data,"color":color})
   });
}