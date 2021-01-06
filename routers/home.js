const express=require('express');
const app=express();
const router=express.Router();
var homeController=require("../controllers/home.js")
router.get("/",homeController.home)
module.exports=router