var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
 
 
app.use(bodyParser.urlencoded({
    extended : true,
    limit : '50mb'
}));
 
 
app.use(bodyParser.json({
    limit : '50mb'
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'a')));
app.get('/', function (req, res) {
  res.sendFile(__dirname+ '/a/index.html');
});
 
app.get('/next',function (req,res,next) {
    console.log("next first");
    next();
},function (req,res) {
    res.send('ok');
});
 
 
app.use(function (err,req,res,next) {
    console.log(err);
    res.send('This is error');
});
 
app.listen(2027, function () {
  console.log('Example app listening on port 2027!')
});