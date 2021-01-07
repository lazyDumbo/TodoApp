const db=require("../config/mongoose");
const Todo=require("../models/Todo");
//Add a new todo
module.exports.add=function(req,res){
    //console.log (req.body)
    var todo=new Todo(req.body);
    todo.save();
    res.send(todo);
}
//Deleting array of elements that are checked
module.exports.delete=function(req,res){
    //console.log(req.body);
    Array(req.body["id[]"]).forEach(function(id){Todo.findByIdAndDelete(id,function(){
      console.log("deleted")
    })
    })
    res.send("done");
}
module.exports.mark=function(req,res){
    //console.log(req.body);
    Todo.findOne({"_id":req.body.id},function(err,data){
        data["done"]=req.body.done;
        data.save();
    });
}