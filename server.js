var http = require('http'),
    fs   = require('fs'),
    filePath = 'audio/disco.mp3',
    io = require('socket.io')(http),
    stat = fs.statSync(filePath);

http.createServer(function(request, response) {
    response.write('/frontend/index.html');
    response.end();
}).listen(2000, function() {
    console.log('UR MOM running on port 2000');
});

io.on('connection', function(socket) {
    console.log('some shithead connected!');

    socket.on('disconnect', function() {
        console.log('HE IS RUNNING AWAY!!!');
    });
});



