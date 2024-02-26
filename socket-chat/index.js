const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

const users = {}; 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  users[socket.id] = "Anonymous"; 
  io.emit("user list", Object.values(users)); 
  console.log("SERVER - user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
    delete users[socket.id]; 
    io.emit("user list", Object.values(users));
    io.emit("chat message", { msg: "A user has disconnected", system: true });
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", {
      msg: msg,
      user: users[socket.id],
      system: false,
    }); 
  });

  socket.on("nickname", (nickname) => {
    const oldNickname = users[socket.id];
    users[socket.id] = nickname; 
    io.emit("user list", Object.values(users)); 
    io.emit("chat message", {
      msg: `${oldNickname} is now known as ${nickname}`,
      system: true,
    });
  });
});

server.listen(8000, () => {
  console.log("listening on *:8000");
});