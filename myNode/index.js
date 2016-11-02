var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
//mongoose
mongoose.connect('mongodb://localhost/myDB');

var con = mongoose.connection;
//var con =mongoose.connect('mongodb://localhost:27017/test_1');

con.once('open',function callback(){
	console.log('open');
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
    
    
});

io.on('connection',function(socket){
	console.log('a user connected !');
	socket.on('disconnect',function(){
		console.log('user disconnected');
	});
	
});

http.listen(3000,function(){
    console.log('ready complete on 3000');
});
