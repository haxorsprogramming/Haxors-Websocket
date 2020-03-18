var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat:pesan', function(pesan){
    io.emit('chat:pesan', pesan);
    console.log(pesan);
  });

  socket.on('userDis', function(user){
    io.emit('userDis', user);
    console.log("User "+user+ " keluar ...!!");
  });

  socket.on('user:user', function(user){
    io.emit('user:user', user);
    console.log("User "+user+ " masuk ...!!");
  });

  socket.on('disconnect', function() {
    console.log("User disconnect");
  });

});

http.listen(3000, function(){
  console.log('Server di port 3000');
});
