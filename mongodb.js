var mongodb = require('mongodb').MongoClient;

var conn_str = 'mongodb://localhost:27017/marlabs';
/*
mongodb.connect(conn_str, function (err, db) {
    if(err){
        console.log('Error!');
    }else {
        console.log('Connection established!');
        var db_records = db.collection('training').find();
        db_records.each(function (err, res) {
            console.log(res);
        });
    }
    db.close();
});*/

/*mongodb.connect(conn_str, function (err, db) {
    if(err){
    }else {
        db.collection('training').insert({"topic":"MongoDB", "batch":"Javascript", "student_count": 23}, function (err, res) {
            if(!err){
                var db_records = db.collection('training').find();
                db_records.each(function (err, res) {
                    console.log(res);
                });
            }
        })
    }
});*/

/*
mongodb.connect(conn_str, function (err, db) {
    if(err){
        console.log('Error!');
    }else {
        console.log('Connection established!');
        var db_records = db.collection('training').find({$or:[{'topic':'MongoDB'},{'topic':'ReactJS'}]});
        db_records.each(function (err, res) {
            console.log(res);
        });
    }
    db.close();
});*/

/*mongodb.connect(conn_str, function (err, db) {
    if (err) {
    } else {
        db.collection('training').update({"topic": "MongoDB"}, {$set: {"topic": "Angular 4.0"}});
        var db_records = db.collection('training').find();
        db_records.each(function (err, res) {
            console.log(res);
        });
    }
});*/

/*
mongodb.connect(conn_str, function (err, db) {
    if (err) {
    } else {
        db.collection('training').deleteOne({"topic": "MongoDB"});
        db.collection('training').deleteMany({"topic": "ReactJS"});
        var db_records = db.collection('training').find();
        db_records.each(function (err, res) {
            console.log(res);
        });
    }
});*/

mongodb.connect(conn_str, function (err, db) {
    if (err) {
    } else {
        db.collection('training').drop();
        var db_records = db.collection('training').find();
        db_records.each(function (err, res) {
            console.log(res);
        });
    }
});