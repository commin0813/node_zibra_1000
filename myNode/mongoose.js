var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myDB');

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',function callback(){
	console.log('open');
});

var userSchema =mongoose.Schema({
	username:'string',
	age:'number'
});

var User = mongoose.model('User1',userSchema);//collection name

var user1 = new User({username:'commin',age:30});
var user2 = new User({username:'Alta',age:20});

user1.save(function(err,user1){
	if(err)
		console.log('error');
	else
		console.log('save 1 success');
});
user2.save(function(err,user2){
	if(err)
		console.log('error');
	else
		console.log('save 2 success1');
});

