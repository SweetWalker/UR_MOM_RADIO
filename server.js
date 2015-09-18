var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    fs   = require('fs'),
    filePath = 'audio/disco.mp3',
    io = require('socket.io')(http),
    stat = fs.statSync(filePath);

app.get('/', express.static(__dirname + "/frontend/"));

http.listen(2000, function() {
    console.log('UR MOM running on port 2000');
});

io.on('connection', function(socket) {
    console.log('some shithead connected!');

    stream = fs.createReadStream(__dirname + "/" + filePath);

    stream.on('data', function(chunk) {
        socket.broadcast.emit('audio', { data: chunk });
    });

    stream.on('finish', function() {
        console.log("LOG: stream ended");
    });

    socket.on('disconnect', function() {
        console.log('HE IS RUNNING AWAY!!!');
    });
});



