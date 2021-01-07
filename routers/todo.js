const express=require('express');
const app=express();
const router=express.Router();
var homeController=require("../controllers/home.js")
router.all("/add",require("../controllers/todo.js").add);
router.all("/delete",require("../controllers/todo.js").delete);
router.all("/mark",require("../controllers/todo.js").mark);
module.exports=router