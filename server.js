var express    = require("express");
var socket     = require("socket.io");

//App setup
const port = process.env.PORT || 4000;
var app        = express();
var server     = app.listen(port, function(){
  console.log(`Server started at port ${port}...`);
});

//Static files
app.use(express.static("public"));


//Socket setup
var io = socket(server);


//Listen to event from Socket
io.on("connection", function(socket){
  console.log(`made socket connection ${socket.id}`);

  socket.on("chat", function(data){
    console.log(data);
    io.sockets.emit("chat", data);
  });


  socket.on("typing", function(data){
    socket.broadcast.emit("typing", data);
  });
});











