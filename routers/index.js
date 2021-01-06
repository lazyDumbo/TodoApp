const express=require('express');
const app=express();
const router=express.Router();

router.use("/",require("./home"));

module.exports=router;