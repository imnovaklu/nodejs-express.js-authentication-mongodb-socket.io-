var request = require("request");
request('http://chenlu1992.com', function (err, res, body) {
    if(err){
        console.log("error happened");
    }else {
        console.log(body);
    }
});