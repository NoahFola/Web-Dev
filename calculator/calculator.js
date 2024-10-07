const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
}); 
app.get("/bmicalculator", function (req, res){
    res.sendFile(__dirname + "/bmiCalculator.html ")
}); 

app.post("/", (req, res)=>{
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send(""+result);
});
app.post("/bmiCalc", (req, res)=>{
    var n1 = Number(req.body.Weight);
    var n2 = Number(req.body.Height);
    var result = n1/(n2*n2)
    res.send(""+result);
});

app.listen(3000);

