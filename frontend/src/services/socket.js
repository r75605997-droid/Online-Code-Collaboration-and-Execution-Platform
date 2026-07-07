import { io } from "socket.io-client";

/**
 * Single shared Socket.IO client instance.
 * autoConnect is disabled so the connection can be opened deliberately
 * (e.g. once a user joins a code room) in a later phase.
 */
const socket = io(import.meta.env.VITE_SOCKET_URL || "http://localhost:5000", {
  autoConnect: false,
});

export default socket;
