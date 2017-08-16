var path = require('path');
var fs = require('fs');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

//view Engine

app.set("view engine",'html');
app.engine('html', function(path, options,callback){
    fs.readFile(path,'utf-8',callback);
});


//middleware//

app.use(express.static(path.join(__dirname,'src/client')));

//route

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + 'index.html'))
});

app.use(function (err,res,req,next) {
    res.status(err.status || 500)
})

app.listen(port, function(){
    console.log('Running on port '+ port);
});
