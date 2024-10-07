const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req ,res)=>{
    res.sendFile(__dirname + "/index.html")
});
app.post("/" , (req , res)=> {
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;

    request("https://min-api.cryptocompare.com/data/price?fsym="+crypto+"&tsyms="+fiat+"", (error, response, body)=>{
        var obj =JSON.parse(body);
        var price = Object.values(obj)[0];
        res.send("The price of "+crypto+" is "+price+""+fiat)
    });
    
});


app.listen(3000)