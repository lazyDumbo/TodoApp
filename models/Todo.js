const mongoose=require('mongoose')

//setup schema for Todo apps
var TodoSchema=new mongoose.Schema({
    description:String,
    done:Boolean,
    category:String,
    due_date:{ type: Date, default: Date.now()}
})

var model=mongoose.model('Todo',TodoSchema);


module.exports=model;