const express=require('express');
const app=express();
const router=express.Router();

router.use("/",require("./home"));
router.use("/todo",require("./todo"));
module.exports=router;