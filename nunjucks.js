var express = require('express'),
    app = express(),
    fs = require('fs'),
    engines = require('consolidate'),
    bodyParser = require('body-parser');

// specify template engine
app.engine('html', engines.nunjucks);
// specify the extension
app.set('view engine', 'html');
//specify the view directory
app.set('views', __dirname + '/views');

app.use(express.static('assets'));

app.use(bodyParser.urlencoded({extended:true}));

app.all('/', function (req, res) {
    var a_companies = ['Marlabs', 'Alibaba', 'Tencent', 'Baidu'];
    res.render('home', {'username':'english10010', 'companies':a_companies});
});

app.post('/postdata', function (req, res) {
    var selected_company = req.body.company;
    console.log(req.body);
    res.render('company_selection', {'sel_company':selected_company});
});

app.get('/users/:username/:location', function (req, res) {
    var username = req.params.username,
        location = req.params.location,
        firstname = req.query.firstname,
        lastname = req.query.lastname;
    res.send('Username = ' + username + ', location = ' + location + ', firstname = ' + firstname + ', lastname = ' + lastname);
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
