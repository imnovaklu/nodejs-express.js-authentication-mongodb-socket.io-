var fs = require('fs');
/*console.log('File being read!!');
var file_contents = fs.readFileSync('file.txt', 'utf-8');
console.log(file_contents);
console.log('File read completed!!');
fs.writeFile('file.txt', 'Content written using writeFile', 'utf-8', function (err, res) {
    if(err){
        console.log('Error Happened!');
    }else {
        console.log('Data written!!');
    }
});

fs.stat('file.txt', function (err, stats) {
    console.log(stats.isFile());
});

fs.open('file.txt', 'a+', function (err, res) {
    fs.write(res, 'New Content updated', 'utf-8', function () {
        console.log("Data Updated!!");
    })
});

fs.unlink('file.txt', function (err) {
    if(err){
        console.log('Error Happened');
    }else{
        console.log('File deleted!!');
    }
});*/

/*var read_stream = fs.createWriteStream('file.txt', {'flag': 'a'});
var data = 'This is dhsfhdjfn kjfnks jnksdj nsskdjfsjfhsk jfsk j';
read_stream.write(data, 'utf-8');
read_stream.end();
read_stream.on('finish', function () {
    console.log('Finished!!');
});*/

/*
read_stream.setEncoding('utf-8');

read_stream.on('data', function (data) {
    console.log('data_chunk = ' + data);
});

read_stream.on('end', function (data) {
    console.log('Finished reading file!');
});

read_stream.on('error', function (data) {
    console.log('Error Happened!');
});*/

var read_stream = fs.createReadStream('hugefile.txt');
var write_stream = fs.createWriteStream('file.txt');

read_stream.pipe(write_stream);
write_stream.on('close', function (err) {
    if(err){
        console.log('Error!');
    }else {
        console.log('Data Written!')
    }
});
write_stream.on('finish', function (err) {
    if(err){
        console.log('Error!');
    }else {
        console.log('Data Finish!')
    }
});