// index.js

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Define connection handler on the correctly named `io` instance
io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  socket.on('chat message', (msg) => {
    const messageWithTime = {
      user: msg.user,
      text: msg.text,
      timestamp: Date.now()
    };
    io.emit('chat message', messageWithTime);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
