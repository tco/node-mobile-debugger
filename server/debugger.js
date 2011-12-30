var io = require('socket.io').listen(3000);

io.set('log level', 1);
io.sockets.on('connection', function (client) {
	client.on('log', function (data) {
		console.log(data);
	});
});