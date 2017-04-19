var express = require('express'),
    session = require('express-session'),
    MongoDBStore = require('connect-mongodb-session')(session),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

var store = new MongoDBStore({
    uri:"mongodb://localhost:27017/marlabs",
    collection:'marlabs_session'
});

app.use(
    session({
    secret:'marlabs_sess_secret_key',
    resave:true,
    saveUninitialized:true,
    store:store
}));

store.on('error', function (req, res) {
    console.log("error");
});

app.get('/', function (req, res) {
    //req.session.username = "Chenlu";
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/login', function (req, res) {
    req.session.user = {"username":req.body.username, "password": req.body.password};
    res.send("Welcome " + req.session.user.username + ", your password is " + req.session.user.password);
    /*res.send(req.session.username);
    if(req.query.username == "admin" && req.query.password == "admin"){
        console.log(req.session);
    }*/
});

/*
app.get('/awesome', function(req, res){
    if(req.session.lastPage) {
        console.log('Last page was: ' + req.session.lastPage + ".");
    }
    req.session.lastPage = '/awesome'; //每一次访问时，session对象的lastPage会自动的保存或更新内存中的session中去。
    res.send("You're Awesome. And the session expired time is: " + req.session.cookie.maxAge);
});

app.get('/radical', function(req, res){
    if (req.session.lastPage) {
        console.log('Last page was: ' + req.session.lastPage + ".");
    }
    req.session.lastPage = '/radical';
    res.send('What a radical visit! And the session expired time is: ' + req.session.cookie.maxAge);
});

app.get('/tubular', function(req, res){
    if (req.session.lastPage){
        console.log("Last page was: " + req.session.lastPage + ".");
    }

    req.session.lastPage = '/tubular';
    res.send('Are you a suffer? And the session expired time is: ' + req.session.cookie.maxAge);
});
*/


app.listen(8080, function () {
    console.log("localhost:8080");
});