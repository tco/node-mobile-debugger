window.Debugger = function() {
	var self = this;
	self.server = location.hostname;
	self.port = 3000;
	self.connect = function(server, port) {
		self.socket = io.connect('http://' + server + ':' + port);
	}
	self.log = function() {
		var n = arguments.length;
		for(var i = 0; i < n; i++) {
			self.socket.emit('log', arguments[i]);
		}
		
	}
	self.connect(self.server, self.port);
}