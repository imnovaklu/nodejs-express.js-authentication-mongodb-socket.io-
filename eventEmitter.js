var EventEmitter = require('events').EventEmitter;

function abc(cntr) {
    var e = new EventEmitter();
    setTimeout(function () {
        e.emit('process_started');
        var counter = 0;
        var interval = setInterval(function () {
            e.emit('process_data', counter++);
            if(counter === cntr){
                clearInterval(interval);
                e.emit('process_finished');
            }
        }, 2000);
    }, 1000);
    return e;
}

var abc_event = abc(5);
abc_event.on('process_started', function () {
    console.log('Process started!!!!');
});
abc_event.on('process_data', function (data) {
    console.log(data);
});
abc_event.on('process_finished', function () {
    console.log('Process Finished!!!');
});