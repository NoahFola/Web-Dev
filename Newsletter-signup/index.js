const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.get("/", (req,res)=>{
    res.sendFile(__dirname +"/signup.html")
});
app.use(express.static("public"))

app.post("/", (req, res)=>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    console.log(email+lname+fname)
});




app.listen(3000, ()=>{
    console.log("working")
});

//API Key
//f4c9135afdde648b2b61c4e3cfb7b828-us12
