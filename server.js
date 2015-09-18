var http = require('http'),
    fs   = require('fs'),
    filePath = 'audio/disco.mp3',
    stat = fs.statSync(filePath);

http.createServer(function(request, response) {

    response.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });
    var somefunc = function () {
    var pew = fs.createReadStream(filePath)
    pew.on('open', function(){
    	pew.pipe(response);
    	console.log('First playing')
    })
    pew.on('end', function(){
    	process.nextTick( function(){
    		pew.pipe(response)
    	});
    	console.log('END')
    })
}

somefunc();


})
.listen(2000);

