const mongoose=require('mongoose')
const moment=require('moment')
//setup schema for Todo apps
var TodoSchema=new mongoose.Schema({
    description:String,
    done:Boolean,
    category:String,
    due_date:{ type: String, default:"08/01/2021"}
})

const model=mongoose.model('Todo',TodoSchema);


module.exports=model;