var mongoose = require('mongoose');
global.Promise = require('q').Promise;
mongoose.Promise = global.Promise;
var conn_str = 'mongodb://localhost:27017/marlabs';

mongoose.connect(conn_str);
var db = mongoose.connection;

db.on('error', function () {
    console.log('Error Happened!!');
});

db.on('open', function () {
    console.log('Connection Established!!');
    var student_schema = mongoose.Schema({
        'name':String,
        'email':String,
        'phone':Number,
        'location':String,
        'active':Boolean
    });

    var student_model = mongoose.model('student', student_schema);
    var student_document = student_model({
        'name':'Peter',
        'email':'perter.michal@gmail.com',
        'phone':132145841,
        'location':'Arutown',
        'active':false
    });
    //insert data
    /*student_document.save(function (err) {
        if(err){
            console.log('Error!!!');
        }else{
            console.log('Data saved!!!');
            db.close();
        }
    });*/
    //fetch data
    var student_documents = student_model.find({$or: [{'name':'Chen Lu'},{'name': 'Peter'}]}, function (err, res) {
        res.forEach(function (val) {
            console.log(val);
        });
        db.close();
    });
    student_model.update({'name':'Peter'},{$set: {'name':'Peter Song'}}, function (err, res) {
        console.log(res);
        db.close();
    });
    student_model.find({}, function (err, res) {
        console.log(res);
    });
    student_model.remove({'name':'Peter Song'}, function (err, res) {
        if(!err){
            console.log('Deleted!!!');
        }
        db.close();
    });
});