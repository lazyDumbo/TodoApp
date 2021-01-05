// Setting Up Database
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoapp', {useNewUrlParser: true});
var db=mongoose.connection
module.exports=db;