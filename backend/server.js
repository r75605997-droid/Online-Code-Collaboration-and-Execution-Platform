require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");

const app = require("./src/app");
const connectDB = require("./src/config/db");
const initSocket = require("./src/sockets");

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Create raw HTTP server so Express and Socket.IO can share the same port
const server = http.createServer(app);

// Attach Socket.IO to the same server instance
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

initSocket(io);

server.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});
