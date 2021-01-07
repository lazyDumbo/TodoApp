const express=require('express');
const app=express();
const router=express.Router();
const port=8000;
var homeRouter=require("./routers/home.js")
app.set('view engine','ejs')
app.set('views','views')
var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname));
app.use("/",require("./routers/index"))

app.listen(port,function(){
    console.log(`Listening at port ${port}`);
})