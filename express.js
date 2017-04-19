var express = require('express'),
    app = express(),
    fs = require('fs');

app.use(express.static('assets'));

app.all('/', function (req, res) {
    /*fs.readFile('home.html','utf-8', function (err, data) {
        res.end(data);
    });*/
    res.sendfile(__dirname + '/home.html');
});

app.get('/home', function (req, res) {
    res.send('Welcome to my home page!!!!');
});

app.use(function (req, res) {
    res.send('404 Not Found!!!!');
});

app.listen(8080, function () {
    console.log('Server running @ localhost:8080');
});
