var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb').MongoClient;
var jwt = require('jsonwebtoken');

var app = express();
var secureRoutes = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/secure-api', secureRoutes);

process.env.SECRET_KEY = "novaksecret";

app.get('/api/getuser', function (req, res) {
    var user = {
        username: "imnovaklu",
        password: "imnovaklu"
    };
    var token = jwt.sign(user, process.env.SECRET_KEY, {
        expiresIn: 4000
    });
    res.json({
        success: true,
        token: token
    })
});

secureRoutes.use(function (req, res) {
    var token = req.body.token || req.header['token'];
    console.log(req.body);
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
            if(err){
                res.status(500).send('invalid token');
            }else{
                res.status(500).send('successfully!');
            }
        });
    }else{
        res.send('please send a token')
    }
});

secureRoutes.post('/postuser', function (req, res) {
    res.send('got');
});

app.listen(8080, function () {
    console.log('Server running @ localhost:8080');
});