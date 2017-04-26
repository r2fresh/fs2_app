var express = require('express');
var app = express();


app.get('/',function(req, res){
    res.sendFile(__dirname + '/src/index.html')
})

app.use(express.static('src'));

var portNum = process.env.PORT || 8080;

app.listen(portNum, function () {
    console.log('Example app listening on port ' + portNum +'!');
});
