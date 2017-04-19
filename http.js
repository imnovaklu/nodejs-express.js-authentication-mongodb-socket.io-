var http = require('http');
var fs = require('fs');
var google = '';
var req = http.request('http://www.google.com', function (resp) {
    resp.on('data', function (chunk) {
        google += chunk;
    });
    resp.on('end', function (data) {

    })
});
req.end();
http.createServer(function (req, res) {
    /*if(req.url == './home.html'){
        res.writeHead(200, {'content-Type':'text/html'});
        fs.readFile('home.html','utf-8', function (err, data) {
            res.end(data);
        });
    }else if(req.url == '/index.html'){

    }*/
    res.writeHead(200, {'content-Type':'text/html'});
    res.end(google);
}).listen('8080', '127.0.0.1');
console.log('Server Running at http://127.0.0.1:8080');