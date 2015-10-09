import { Server } from 'http';
import fs from 'fs';
import { join } from 'path';

import express from 'express';
import socketIO from 'socket.io'

const app = express(),
	http = Server(app),
	io = socketIO(http),
	filePath = 'audio/disco.mp3',
	stat = fs.statSync(filePath);

app.set('port', process.argv[2] || 9000);
app.get('/', express.static(join(__dirname, '/frontend/')));

http.listen(app.get('port'), () => {
	console.log('UR MOM is running over ' + app.get('port'));
});

